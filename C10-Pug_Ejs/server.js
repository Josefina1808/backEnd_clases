const express = require("express");

const app = express();

app.set('views', './views/ejs')
app.set('views engine', 'ejs')

app.get('/', (req, res) => {
  res.render('mensaje.ejs', {
      mensaje: "Hola Josefina Esnaola!"
  })
})

app.get('/datos', (req, res) => {
    return res.render('datos.ejs', req.query)
})

app.get('/pets', (req, res) => {
    const pets = [
        {name: "Toto", age: 8},
        {name: "Don", age: 5},
        {name: "Olivia", age: 6},
        {name: "Negra", age: 6},
    ]

    const mensaje = "Mascotas Josefina"

    return res.render('pets.ejs', {pets, mensaje})
})
  
app.listen(8080)