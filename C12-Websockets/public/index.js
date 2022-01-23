let username = sessionStorage.getItem('username') 
if (!username) {
  username = prompt('Ingrese nombre de usuario')
} 
$("#username").html(username)

const socket = io.connect();

function render(data) {
  data.forEach((info) => {
    $("#message").prepend(`
      <div>
          <strong>${info.author}</strong>
          [${info.time}]<em>${info.text}</em>
      </div>
    `);
  });
}

socket.on("messages", (data) => {
  console.log(data);
  render(data);
});

$('#myForm').submit(e => {
  e.preventDefault();

  const message = {
    author: username,
    text: $("#text").val,
  };

  socket.emit("new-message", message);
})