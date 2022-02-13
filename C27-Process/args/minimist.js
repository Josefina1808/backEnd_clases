//Al usar minimist es más fácil la visualización de los argumentos
const parsetArg = require('minimist')

const options = {
    default: {
        name: 'Josefina',
        lastname: 'Esnaola'
    }
}

//const args = parsetArg(process.argv.slice(2))
const args = parsetArg(['-a', '1', '--segundo', '2', 'un_valor_suelto', '--algo', 'Algo'], options)
console.log(args);