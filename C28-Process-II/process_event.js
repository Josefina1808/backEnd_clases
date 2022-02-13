/* FUNCTION .on() --> process.on('evento', callback) */

process.on('beforeExit', (code) => {
    console.log('Bye bye');
})
process.on('exit', (code) => {
    console.log('Chao Chao');
})

console.log('Running');
console.log('Running');
console.log('Running');
console.log('Running');
console.log('Running');

console.log('Almost...');