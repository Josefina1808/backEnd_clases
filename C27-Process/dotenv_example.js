require('dotenv').config({ path: './config/.env'})

const fondo = process.env.FONDO
const frente = process.env.FRENTE
const port = Number(process.env.PUERTO)
const debug = Boolean(process.env.DEBUG)

console.log({fondo, frente, port, debug});