const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

let numUsers = 0;
const messages = [
  { author: "Josefina", text: "Ctrl + shift + ñ" },
  { author: "Francisco", text: "Hola" },
  { author: "Juan", text: "Que tal?" },
];

httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});

io.on("connection", (socket) => {
  numUsers++;
  io.emit("stats", { numUsers });
  console.log(`New User`);
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    data.time = new Date().toLocaleDateString();
    messages.push(data);
    io.sockets.emit("messages", [data]);
  });

  socket.on("disconnect", () => {
    numUsers--;
    io.emit("stats", { numUsers });
    console.log(`Users: ${numUsers}`);
  });
});