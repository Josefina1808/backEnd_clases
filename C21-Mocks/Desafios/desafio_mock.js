//Desafio de clase
const express = require('express')
const app = express()

const names = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const lastnames = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colors = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']


function getRandom(array) {
    return array[Math.floor(Math.ramdom() * array.length)]
}

function createObject() {
    return {
        nombre: getRandom(names),
        apellido: getRandom(lastnames),
        color: getRandom(colors),
    }
}

app.get('/test', (req, res) => {
    const objs = []
    for (let i =  0; i<10; i++) {
        objs.push(createObject())
    }
    res.json(objs)
})

app.listen(8080)