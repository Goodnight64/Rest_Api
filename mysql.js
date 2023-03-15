const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "92512699",
    "database": "club_travel",
    "host": "localhost"
});

exports.pool = pool;
