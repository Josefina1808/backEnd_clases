const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public')) //se puede subir el archivo desde index.html

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('myFile'), (req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error("Please upload file")
        error.httpStatusCode = 400;
        return res.send(error)
    } 
    res.send(file)
})

app.listen(8080)