const {fork} = require('child_process')
const forked = fork('child.js')

forked.on('message', msg => {
    console.log(`Form child: ${JSON.stringify(msg)}`);
})

console.log('Init process Dad');

setTimeout(() => {
    forked.send({mesaje: 'Hii'})
}, 2000);