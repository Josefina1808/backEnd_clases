const mongoose = require("mongoose");
const { Schema } = mongoose;

const estudiantesSchema = new Schema({
  nombre: { type: String, require: true, max: 100 },
  apellido: { type: String, require: true, max: 100 },
  email: { type: String, require: true, max: 100 },
  edad: { type: Number, require: true },
});

const Estudiante = mongoose.model('Estudiantes', estudiantesSchema);
module.exports = Estudiante;
