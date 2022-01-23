const { options } = requiere("./options/db.js");
const knex = require("knex")(options);

const cities = [
  { name: "Bogotá", population: 7181 },
  { name: "Ciudad Autónoma de Buenos Aires", population: 3075 },
  { name: "La Plata", population: 193 },
  { name: "Mendoza", population: 115 },
];

knex("ciudades")
  .insert(cities)
  .then(() => console.log("Data inserted"))
  .catch((err) => {console.log(err);throw err;})
  .finally(() => {knex.destroy();});
