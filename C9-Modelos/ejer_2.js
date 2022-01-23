const express = require("express");
const fs = require('fs')

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Creando motor de plantilla
app.engine('.cte', function(filePath, options, callback){
    fs.readFile(filePath, function(err, content) {
        if(err) return callback(new Error(err))
        
        const rendered = content.toString()
        .replace('^^title$$', options.title + '')
        .replace('^^message$$', options.message + '')
        .replace('^^author$$', options.author + '')
        .replace('^^version$$', options.version + '')
        return callback(null, rendered)
    })
})
app.set('/views','/views')
app.set('view engine','cte')
//---------------------------

app.get('/cte1', (req, res) => {
    const obj = {
        title: "Los 4 acuerdos",
        message: "Tenès que leerlo",
        author: "Miguel Ruiz",
        version: "2.2"
    }
    res.render('plantilla1', obj)
})

app.listen(3000);