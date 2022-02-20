const http = require('http')
const {fork} = require('child_process')

const server = http.createServer()

server.on('request', (req, res) => {
    let {url} = req
    if (url == '/calculo') {
        const calculo = fork('./calculo.js')
        calculo.send('start')
        calculo.on('message', sum => {
            res.end(`La suma es ${sum}`)
        })
    } else if (url == '/') {
        res.end(`OK ${++visitas}`)
    }
})

server.listen(8080, err => {
    if (err) throw new Error('error server')
    console.log('Running server');
})
