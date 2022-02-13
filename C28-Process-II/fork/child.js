let contador = 0

process.on('message', msg => {
    console.log(`From dad ${JSON.stringify(msg)}`);

    setInterval(() => {
        process.send({contador: ++contador})
    }, 1000);
})