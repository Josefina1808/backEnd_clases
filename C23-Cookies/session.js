const express = require('express')
const session = require('express-session')
const app = express()

var PORT = process.env.port || 8080

//Session setup
app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))

//Saving data in session
app.get('/with-session', (req, res) => {
    if (req.session.contador)  {
        req.session.contador++ 
        res.send(`You have visited this website ${req.session.contador} times.`)
    } else {
        req.session.contador = 1
        res.send('Welcome!')
    }
})

//Deleting session data
app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        if (!err) res.send('Logout OK')
        else res.send({status: 'Logout ERROR', body: err})
    })
})

//Login with session
app.get('/login/:username/:password', (req, res) => {
    let username = req.params.username
    let password = req.params.password
    username = username.toLowerCase()
    password = password.toLowerCase()
    if(username !== 'pepe' || password !== 'pepepass') return res.send('Login failed')
    
    req.session.user = username
    req.session.admin = true
    res.send('Login success!')
})

//Authentication middleware
const auth = (req, res, next) => {
    if (req.session.user === 'pepe' && req.session.admin) return next()
    else return res.status(401).send('Authentication error')
}

//Route with authentication
app.get('/private', auth,(req, res) => {
    res.send('You are seeing this because you\'ve already login')
})

//Logout with session
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.json({status: 'Logout ERROR', body:err})
        else res.send('Logout OK')
    })
})

app.listen(PORT)