require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.POSTGRESQL_USER,
    host: process.env.POSTGRESQL_HOST,
    database: process.env.POSTGRESQL_DATABASE,
    password: process.env.POSTGRESQL_PASSWORD,
    port: process.env.POSTGRESQL_PORT,
});

const getRestaurants = (request, response) => {
    pool.query('SELECT restaurants.id, restaurants.name, cities.name AS city_name FROM restaurants LEFT JOIN cities ON restaurants.city_id = cities.id', (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).send(results.rows);
    })
}

// const addUser = (request, response) => {
//     const { name, age } = request.body;

//     pool.query('INSERT INTO person (name, age) VALUES ($1, $2)', [name, age], (error, results) => {
//         if (error) {
//             throw error;
//         }

//         response.status(200).send('User been added');
//     })
// }

module.exports = {
    getRestaurants,
}