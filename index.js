require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const queries = require('./queries');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.get('/', (request, response) => {
    response.send(`Hello boy, we are going to create best App! ${process.env.POSTGRESQL_USER}`)
});

app.get('/restaurants', queries.getRestaurants);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

