const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/cookies', (req, res) => {
    let data = req.body;
    res.cookie(data.key, data.value, {maxAge: data.time}).send('Cookie done')
    res.send('Cookie configurated')
})

app.get('/cookies', (req, res) => {
    res.send(req.cookies)
})

//Recibe el nombre de una cookie por parámetro de ruta, y la elimine.
app.delete('/cookies/:key', (req, res) => {
    let key = req.params.key;
    if (key in req.params) {
        res.clearCookie(key).send('Cookie deleted')
    } else {
        res.send(`Cookie ${key} not found`)
    }
})

app.listen(3000)