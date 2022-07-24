const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'R!%oBUe$xd$G3fe^6S&R',
    database: 'election'

});

module.exports = db;