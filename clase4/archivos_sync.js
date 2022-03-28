const fs = require('fs')

//LECTURA
const data = fs.readFileSync('un_archivo.txt', 'utf-8')
console.log(data)

//CREAR UN ARCHIVO
fs.writeFileSync('archivo_nuevo.txt', "ESTO ES UN ARCHIVO NUEVO")

//AGREGAR TEXTO A UN ARCHIVO
fs.appendFileSync('archivo_nuevo.txt', "\nSALUD!")

//Guardar datos JSON
let datos = [
    {nombre:"Lucas"}
]