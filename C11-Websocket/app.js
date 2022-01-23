const express = require("express");
const { Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

httpServer.listen(8080, () => {
    console.log('SERVER ON');
});

io.on('connection', (socket) => {
    let now = new Date().toLocaleTimeString();
    console.log(`[${now}]Se abrió conexión IO`);

    //Se envía mensaje cada dos segundos desde el servidor
   /*  setInterval(() => {
        let nowEmit = new Date().toLocaleTimeString();
        socket.emit('josefina', `[${nowEmit}] Message from server`)
    }, 10000)
 */
// Cada vez que llega un mensaje al evento 'josefina'
    socket.on('josefina', data => {
        console.log(data);
        io.sockets.emit('josefina', data)
    })
})


