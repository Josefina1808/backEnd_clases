const express = require("express");
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1"});

const sns = new AWS.SNS();
const SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:822015538243:notifications";

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "registro-usuarios";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {res.send('test-api')})

async function scanDynamoRecord(scanparams) {
    try {
        let dynamoData = await dynamodb.scan(scanparams).promise();
        const items = dynamoData.Items
        while (dynamoData.LastEvaluatedKey) {
            scanparams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
            dynamoData = await dynamodb.scan(scanParams).promise();
            items.push(...dynamoData.Items)
        }
        return items;
    } catch(e) {
        throw new Error(e);
    }
}

app.get('/api/users', async (req, res) => {
    const params = {
        TableName: TABLE_NAME
    }   
    try {
        const users = await scanDynamoRecord(params);
        res.json(users)
    } catch(error) {
        console.error(`Ocurrió un ERROR: ${error}`);
        res.sendStatus(500)
    }
})

app.post('/api/users', (req, res) => {
    const params = {
        TableName: TABLE_NAME,
        Items: req.body
    }
    dynamodb.put(params).promise()
    .then(() => {
        console.log('se guardó');
        const user = JSON.stringify(req.body)
        return sns.publish({
            Message: `New user added ${user}`,
            Subject: 'New user',
            TopicArn: SNS_TOPIC_ARN
        }).promise()
    })
    .then(data => {
        console.log('Se notificó');
        console.log(data);

        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: req.body
        }
        res.json(body);
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
        res.status(500).end();
    })
})

app.put('/api/users/:id', (req, res) => {
    const item = {
        ...req.body,
        productId: req.params.id
    }
    const params = {
        TableName: TABLE_NAME,
        Item: item
    }
    dynamodb.put(params).promise()
    .then(() => {
        const body = {
            Operation: 'UPDATE',
            Message: 'SUCCESS',
            Item: item
        }
        res.json(body);
    })
    .catch(error => {
        console.error(`Ocurrió un error: ${error}`)
        res.status(500)
    })
})

app.delete('/api/users/:id', (req, res) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            'productId': req.params.id
        },
        ReturnValues: 'ALL_OLD'
    }
    dynamodb.delete(params).promise()
    .then(() => {
        const body = {
            Operation: 'DELETE',
            Message: 'SUCCESS',
            Item: response
        }
        res.json(body);
    })
    .catch(error => {
        console.error(`Ocurrió un error: ${error}`)
        res.status(500)
    })
})

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Escuchando en puesto ${server.address().port}`);
}) 
server.on('error', error => {console.log(error)})