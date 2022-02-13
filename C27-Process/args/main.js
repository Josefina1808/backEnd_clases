const express = require('express')
const parsetArg = require('minimist')

const options = {
    alias: {
        p: 'puerto',
        m: 'modo',
        _: 'otros',
        d: 'debug'
    }
}

const args = parsetArg(process.argv.slice(2), options)
console.log(args);

const app = express()

app.get('/',(req, res) => {
    res.send(process.argv)
})

app.listen(process.env.puerto || 8080)

/* ----------------------------------- */
/*               CONSIGNA              */