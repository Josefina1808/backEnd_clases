const http = require('http')
/* La funcion calculo es tan larga el bloque los demás endpoits esto se soluciona usan fork */
function calculo() {
    let suma = 0
    for(let i=0; i < 6e9; i++) {
        suma++
    }
    return suma
}

let visitas = 1

const server = http.createServer()
server.on('request', (req, res) => {
    let {url} = req
    if (url == '/calculo') {
        const sum = calculo()
        res.end(`La suma es ${sum}`)
    } else if (url == '/') {
        res.end(`OK ${++visitas}`)
    }
})

server.listen(8080, err => {
    if (err) throw new Error('error server')
    console.log('Running server');
})
