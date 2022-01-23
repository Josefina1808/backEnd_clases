const express = require("express");

const app = express();
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const personas = []

app.set('views', './views/ejs/desafio')
app.set('views engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('index.ejs', {personas})
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    return res.render('index.ejs', {personas})
})

app.listen(8080)