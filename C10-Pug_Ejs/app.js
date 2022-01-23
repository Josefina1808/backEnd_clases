const express = require("express");

const app = express();

app.set('views', './views/pug')
app.set('views engine', 'pug')

app.get('/', (req, res) => {
  res.send('Algo')
})

app.get('/hello', (req, res) => {
  return res.render('hello.pug', {
    mensaje: 'Hola Josefina'
  })
})

app.get('/datos', (req, res) => {
  return res.render('datos.pug', req.query)
})

app.listen(8080);