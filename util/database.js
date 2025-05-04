const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce_lab',
    password: ''
});

module.exports = pool.promise();