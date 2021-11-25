const express = require('express');
const mysql = require('mysql');

//mysql://b948aaef94c03b:6ce9f6ae@eu-cdbr-west-01.cleardb.com/heroku_a6ce1dc3cd1825c?reconnect=true
const connection = mysql.createConnection({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b948aaef94c03b',
    password: '6ce9f6ae',
    database: 'heroku_a6ce1dc3cd1825c'
});
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/todo-list', (req, res) => {
    connection.query('SELECT * FROM todo_list', (err, rows) => {
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).json(rows);
        }
    });
});

app.all('*', (req, res) => {
    res.status(404).send();
})

app.listen(port, () => console.log(`running on port ${port}`));