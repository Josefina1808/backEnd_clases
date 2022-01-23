const express = require("express");
const fs = require('fs')

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Creando motor de plantilla
app.engine('.pan', function(filePath, options, callback){
    fs.readFile(filePath, function(err, content) {
        if(err) return callback(new Error(err))
        console.log(content.toString());
        const rendered = content.toString()
        .replace('#title#', options.title + '')
        .replace('#message#', options.message + '')
        return callback(null, rendered)
    })
})
app.set('/views','/views')
app.set('view engine','pan')
//---------------------------

app.get('/', (req, res) => {
    const obj = {
        title: req.query.title,
        message:req.query.message
    }
    res.render('index', obj)
})

app.listen(8080);