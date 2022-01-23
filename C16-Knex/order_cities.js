const { options } = requiere("./options/db.js");
const knex = require("knex")(options);

//El ejemplo selecciona todas las ciudades y los ordena por precio en orden descendente
knex.from('ciudades').select('name', 'population').orderBy('population', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    }).catch(err => {console.log(err); throw err})
    .finally( () => {
        knex.destroy();
    });