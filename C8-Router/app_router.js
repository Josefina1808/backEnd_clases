const express = require('express')
const {Router} = express

const app = express()
const router = Router()

const PORT = 8080
app.listen(PORT)

app.use('/api', router) //todos las rutas tendrán /api/(lo otro)

router.get('/usuario', (req, res) =>{    
    res.send('Devuelve usuarios. La ruta será /api/usuarios')
})
router.get('/producto', (req, res) =>{    
    res.send('Devuelve productos. La ruta será /api/producto')
})

app.get('/sin-api', (req, res) => {
    res.send('La ruta será /sin-api')
})

//STATIC FILES
app.use('/static',express.static('public'))
app.use(express.static('data'))
