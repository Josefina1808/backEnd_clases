const socket = io();

// Escuchando el evento 'josefina'
socket.on("josefina", (data) => {
  console.log(data);
  $("#chat").append(data + "<br>");
});

//Se envía mensaje cada dos segundos desde el CLIENTE
/* setInterval(() => {
  let nowEmit = new Date().toLocaleTimeString();
  socket.emit("josefina", `[${nowEmit}] Message from client`);
}, 10000); */


// Emite mensaje al servidor
function emitir() {
    let nowEmit = new Date().toLocaleTimeString();
    let msn = `[${nowEmit}]` + $("#msn")[0].value;
    socket.emit("josefina", msn);
}

$('#msn').change(emitir);
$("#btn").click(emitir);