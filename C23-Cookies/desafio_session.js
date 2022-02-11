const express = require("express");
const session = require("express-sesion");

const app = express();
var PORT = process.env.port || 8080

app.get('root/:name', (req, res) => {
    if (req.session.contador)  {
        req.session.contador++ 
        res.send(`${req.session.user} have visited this website ${req.session.contador} times.`)
    } else {
        const name = req.params.name
        req.session.user = name
        req.session.contador = 1
        res.send(`Bienvenido ${name}!`)
    }
})

app.get('forget', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.json({status: 'Logout ERROR', body:err})
        else res.send(`Good bye ${req.session.user}`)
    })
})

app.listen(PORT);
