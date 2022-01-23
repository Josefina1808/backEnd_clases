const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuariosSchema = new Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    usuario: {type: String, require: true, max: 100},
    password: {type: Number, require: true}
})

const Usuarios = mongoose.model('Usuarios', UsuariosSchema);
module.exports = Usuarios