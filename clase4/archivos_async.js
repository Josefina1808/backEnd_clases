//ASINCRÍNICO
const fs = require('fs')

//LEER ARCHIVO
fs.readFile('un_archivo.txt', (error, data) => {
    if (error) {
        console.log("Hubo un error");
    } else {
        console.log(`Este es el callback y esto la data del archivo: ${data}`);
        console.log(data);
    }
})

//SOBREESCRIBIR si el archivo ya existe o ESCRIBIR uno nuevo si NO existe
fs.writeFile('un_archivo_nuevo.txt', 'Este es el mensaje que quiero escribir', error => {
    if (error) {
        console.log("Hubo un error");
    } else {
        console.log(`Esto es writeFile`);
    }
})

//BORRAR un arhcivo
fs.unlink('un_archivo_nuevo.txt', () => {
    console.log("Se borró el archivo");
})