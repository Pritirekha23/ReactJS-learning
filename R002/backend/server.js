const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root_db",
    database: "TEST",
});

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM Users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8801, () => {
    console.log("listening");
});
