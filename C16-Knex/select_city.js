const { options } = requiere("./options/db.js");
const knex = require("knex")(options);

//Selecciona todas las ciudades con population mayor a 1000
knex.from('ciudades').select('name', 'population').where('population', '>', '1000')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch(err => {console.log(err); throw err})
    .finally( () => {
        knex.destroy();
    });