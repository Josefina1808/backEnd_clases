const faker = require('faker')
const fs = require('fs')

var str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\r\n'

for (let i = 0; 1<100; i++) {
    str +=  faker.name.firstName() + ';'
            faker.name.lastName() + ';'
            faker.internet.email() + ';'
            faker.name.jobTitle() + ';'
            faker.random.locale() + '\r\n'
}

fs.writeFile('./testing.csv', str, err => {
    if(err) console.log(err)
    else console.log('File created');
})