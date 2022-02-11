const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

//Setamos una cookie de nombre server y valor josefina. No tiene tiempo de vida límite
app.get("/set", (req, res) => {
  res.cookie("server", "josefina").send("Cookie server");
});

/* En la ruta /setEX se crea una cookie de nombre “server2” y valor “josefina2”. Tiempo de vida máximo de 30 segundos */
app.get("/setEX", (req, res) => {
  res.cookie("server2", "josefina2", { maxAge: 3000 }).send("Cookie SetEx");
});

/* Este es el código para leer las cookies. Se utiliza el parámetro de request, y el nombre asignado a la cookie que se quiere leer. */
app.get("/get", (req, res) => {
  let name = req.cookies.server
  res.send(`Hola ${name}`);
});

/* Para eliminar una cookie: se utiliza el parámetro response y el método clearCookie. El parámetro que se le
pasa al método es el nombre de la cookie que se desea borrar */
app.get('clr', (req, res) => {
    res.clearCookie('server').send('Cookie Clear')
})

app.listen(8080);
