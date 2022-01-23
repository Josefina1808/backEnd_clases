const {options} = requiere('./options/db.js')
const knex = require('knex')(options)

knex.schema.createTable('ciudades', table => {
    table.increments('id')
    table.string('name')
    table.integer('population')
})
    .then(() => console.log('Table created'))
    .catch(err => {console.log(err); throw err})
    .finally(() => {
        knex.destroy();
    })

