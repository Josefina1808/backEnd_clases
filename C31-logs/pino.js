const expres = require('express')
const logger = require('pino')()

const app = expres()

logger.level = 'info'
//LEVEL LOGS
// trace, debug, info, warn, error, fatal

logger.info('Pino info')
logger.error('Error is horrible')
logger.info('The answer was ', 23)
logger.info({a: 21, b:'Printing an objt'}, 'Hello object')

app.get('/',(req, res) => {
    res.send(`Hello to the students, they rocks`.repeat(300))
})

app.listen(3000)