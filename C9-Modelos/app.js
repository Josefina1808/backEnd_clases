const express = require("express");
const handlebars = require('express-handlebars')

const app = express();

//Seteamos el motor de pantilla

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        partialsDir: __dirname + "/views/partials"
    })
)

app.set('view engine','hbs')
app.set('views','./views')

listLugares = () => [
    {name:"Londres", type:"Ciudad"},
    {name:"Moscú", type:"Ciudad"},
    {name:"Buenos Aires", type:"Ciudad"},
    {name:"USA", type:"País"},
    {name:"Alemania", type:"País"},
    {name:"Francia", type:"País"},
]

app.get('/', (req, res) => {
    res.render('home', {
        list: listLugares, showList: true,
    })
})

app.get('/otra', (req, res) => {
    res.render('otra')
})

app.listen(8080);