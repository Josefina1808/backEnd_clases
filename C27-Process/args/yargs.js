const yargs = require('yargs/yargs')(process.argv.slice(2))

const args = yargs
    .default({
        nombre: 'Josefina',
        apellido: 'Esnaola'
    })
    .alias({
        n: 'nombre',
        a: 'apellido'
    })
    .argv

console.log(args);