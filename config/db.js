const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b948aaef94c03b',
    password: '6ce9f6ae',
    database: 'heroku_a6ce1dc3cd1825c'
    /*host: 'localhost:',
    user: 'root',
    password: 'root',
    database: 'todo'*/
});

module.exports = pool.promise();