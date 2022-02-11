const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const Users = require('./models') 

passport.user('login', new LocalStrategy(
    (username, passsword, done) => {

        Users.findOne({username}, (err, user) => {
            if(err) done(err)

            if(!user) {
                console.log('User not founf with username' + username);
                return done(null, false)
            }

            return done(null, user)
        })
    }
))

passport.user('singup', new LocalStrategy(
    {passReqToCallback: true},
    (req, username, passsword, done) => {
        Users.findOne({'username': username}, (err, user) => {
            if(err) {
                console.log('Error singup' + err);
                return done(err)
            }
            if(user) {
                console.log('User already exits');
                return done(null, false)
            }

            const newUser = {unsername, password, name: req.body.name}
            Users.create(newUser, (err, userWithId) => {
                if(err) {
                    console.log('ERROR SAVING USER '+err);
                    return done(err)
                }
                console.log(userWithId);
                return done(null, userWithId)
            })
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((user, done) => {
    Users.findOne()
})

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        partialsDir: __dirname + "/views/partials"
    })
)

app.set('view engine','hbs')
app.set('views','./views')

app.get('/register', (req, res) => {
    res.sendFile(__dirname + 'views/register.html')
})

app.post('/register', (req, res) => {
    const {username, password} = req.body

    const user = users.find(u => u.username == username)
    if(!user) return res.render('resgister-error')

    user.push(username, passsword)
    res.redirect('/login')
})

app.post('/login', (req, res) => {
    const {username, password} = req.body

    const user = users.find(u => u.username == username)
    if(!user) return res.render('resgister-error')

    req.session.username = username
    req.session.contador = 0
   
    res.redirect('/profile')
})


app.get('/profile', (req, res) => {
    if(req.session.username) {
        req.session.contador++
        res.render('profile', {
            username,
            contador: req.session.contador
        })
    } else {
        res.redirect('/login')
    }
})


app.get('/logout', (req, res) => {
    req.session.destroy( err => {
        res.redirect('/login')
    })
})

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Listening ${PORT}`);
})

//INITIALIZE PASSPORT
app.use(passport.initialize())
app.use(passport.session())

app.get('/', routes.getRoot)
app.get('/login', routes.getLogin)
app.post(
    '/login', 
    routes.authenticate('login'),
    routes.postLogin
)
app.get('/singup', routes.getSingup)
app.post(
    '/singup',
    passport.authenticate('singup'),
    routes.postSingup
)

function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) next();
    else res.redirect('/login')
}