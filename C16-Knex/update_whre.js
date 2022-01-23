const { options } = require('./options/db.js')
const knex = require('knex')(options)

knex.from("ciudades")
    .where('population', '<', '1000')
    .update({population: 500})

    .then(() => {
        console.log("cities updateds")
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })