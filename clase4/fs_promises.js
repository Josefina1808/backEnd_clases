const fs = require('fs')

function readArchivo() {
    fs.promises.readFile('un_archivo.txt')
    .then(data => {
        console.log(`El archivo fue leido: ${data}`);
    })
    .catch(error => {
        console.log("ERROR");
    })
}
readArchivo();

