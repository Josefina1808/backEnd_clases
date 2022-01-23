const express = require('express')

const app = express()

const PORT = 8080
app.listen(PORT)

app.use(express.static('public'))

app.use(express.urlencoded({extended: true }))

app.post('/mascotas', (req, res) =>{
    console.log(req.body.nombre);
    res.send('Algo')
})
app.post('/personas', (req, res) =>{
    console.log(req.body.person_name);
    console.log(req.body.person_age);
    res.send(`Nombre: ${req.body.person_name} y edad: ${req.body.person_age}`)
})

