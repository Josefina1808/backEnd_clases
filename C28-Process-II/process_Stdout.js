/* Stdout() imprime por consola*/
process.stdout.write('Hola Holaa')

console.log() = function (d) {
    //Todos los log, se van a ver como LOG: "acá el log"
    process.stdout.write('LOG ->'+ d + '\n');
}

//Esto imprime --> LOG -> Running
console.log('Running');