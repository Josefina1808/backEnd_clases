const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

const PORT = process.argv[2] || 8080

if(cluster.isMaster) {
    console.log(`Master ${process.pid} is running ${PORT}`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker${worker.process.pid} died`);
    })

} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Hello from ${process.pid}`)
    }).listen(8080)
    console.log(`Worker ${process.pid} started`);
}
