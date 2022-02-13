const express = express()
const {fork} = require('child_process')

const app = express()
const forked = fork('sumar.js')

app.get('/', (req, res) => {
    return res.send()
})
app.get('/calculo-bloq', (req, res) => {
    return res.send()
})
app.get('/calculo-nobloq', (req, res) => {
    return res.send()
})

