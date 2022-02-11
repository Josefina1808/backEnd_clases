const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
/* --- PERSISTENCIA POR MONGODB --- */
const MongoStore = require('connect-mongo')
/* -------------------------------------- */

var PORT = process.env.port || 8080

const app = express()
app.use(cookieParser)
app.use(session({
    store: MongoStore.create({mongoUrl: 'mongodb://localhost/sessions'}),
    secret: 'secreto',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000}
}))

app.get('/', (req, res) => {
    if (req.session.contador)  {
        req.session.contador++ 
        res.send(`You have visited this website ${req.session.contador} times.`)
    } else {
        req.session.contador = 1
        res.send('Welcome!')
    }
})

app.listen(PORT)