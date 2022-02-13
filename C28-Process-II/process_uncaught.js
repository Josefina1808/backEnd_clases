process.on('uncaughtException', (err) => {
    console.log('Expection caught: ', err);
})

setTimeout(() => {
    console.log('Running');
}, 500);

funcNoExist()

console.log('Exiting');

/* Con el uncaughtException el programa se seguirá ejecutnado a pesar que la funcNoxist() no esté definida, por lo que si se va imprimir el running */