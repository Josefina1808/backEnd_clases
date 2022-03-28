const moment = require('moment')

console.log("Fechas");

let formato = moment().format('MMMM Do YYYY, h:mm:ss a')
let dayWeek = moment().format('dddd')
let day = moment().format('D/M/YYYY')
let nacimiento = moment('8/18/2002')
let edad = nacimiento.fromNow()

console.log(formato);
console.log(`El dia de la semana es ${dayWeek}`);
console.log(`Mi cumpletaños es ${nacimiento.format('D/M/YYYY')}`);
console.log(`Hoy es ${day}`);
console.log(edad);