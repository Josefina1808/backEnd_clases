const mongoose = require("mongoose");
const Usuarios = require("./models/usuarios");

CRUD();

async function CRUD() {
  try {
    //CONNECT

    // Con user and pass: mongodb://{user}:{password}@{host.com}/{database}
    // Default: mongodb://{host.com}/{database}
    const URL = "mongodb+srv://admin:admin@cluster0.2t9dj.mongodb.net/myFirstDatabase";
    const rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");

    //INSERT
    const user = new Usuarios({
      nombre: "Josefina",
      apellido: "Esnaola",
      email: "josefinaesna@gmail.com",
      usuario: "josefina18",
      password: 123456,
    });
    await user.save();

    console.log("User created");

    //UPDATE
    let userUpdate = await Usuarios.updateOne(
      { password: 123456 },
      { $set: { password: 654321 } }
    );

    console.log('User updated');

    //FIND

    const usuarios = await Usuarios.find()
    console.log(usuarios);

    //DELETE
    let userDeleted = await Usuarios.deleteOne({password: 123456})
    console.log(userDeleted);

  } catch (e) {
    console.log(e);
  }
}
