//INCOMPLETO

const express = require('express')
const {Router} = express

const app = express()
const router = Router()

const PORT = 8080
app.listen(PORT)

app.use(function(req, res, next) {
    console.log(`Time: ${Date.now()}`);
    next()
})

function mid1(req, res, next) {
    req.dato1 = "datos_controller"
    console.log(req.headers); 
}

function valideteTokenMid(req, res, next) {
    req.dato1 = "datos_controller"
    console.log(req.headers);
    if(req.headers.token == 'secret'){
        next()
    } else {
        throw 'Error TOKEN'
    }
}

function addDataMid(req, res, next) {
    console.log("LA DATAAA");
    next()
}


//RUTAS
app.get('/api', (req, res) => {
    res.send("Response DONE")
})
app.get('/nombres',valideteTokenMid, addDataMid, (req, res) => {
    console.log(req.dato1);
    res.json(['Mauro', 'Josefina'])
})
app.get('/edades',valideteTokenMid, addDataMid, (req, res) => {
    console.log(req.dato1);
    res.json([19, 23])
})

app.use('/router', router)