const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
/* --- PERSISTENCIA POR REDIS DATABASE --- */
const redis = require('redis')
const client = redis.createClient()
const redisconnect = require('connect-redis')
const RedisStore = redisconnect(session)
/* -------------------------------------- */

var PORT = process.env.port || 8080

const app = express()
app.use(cookieParser)
app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl:300
    }),
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

//Console.logs para observar lo que traen
app.get('/info', (req, res) => {
    console.log(req.session);
    console.log(req.sessionID);
    console.log(req.cookies);
    console.log(req.sessionStore);
})

app.listen(PORT)