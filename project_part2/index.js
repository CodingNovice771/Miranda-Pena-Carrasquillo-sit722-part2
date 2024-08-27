const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// PostgresSQL connection configuration 
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
});

app.get('/', (req, res) => {
    res.send('Welcome to the Book Catalog Microservice!');
});

app.listen(port, () => {
    console.log(`Book Catalog Microservice is running on port ${port}`);
});