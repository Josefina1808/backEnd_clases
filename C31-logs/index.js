const expres = require('express')
const compression = require('compression')

const app = expres()
app.use(compression())

app.get('/',(req, res) => {
    res.send(`Hello to the students, they rocks`.repeat(300))
})

app.listen(3000)