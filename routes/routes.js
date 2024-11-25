const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'adminDb'
});

db.connect((err) => {
    if (err) {
        console.log('Something went wrotn');
        return;
    }
    console.log('Connected successfully');
});

router.post('/admin', (req, res) => {
    const { email, password } = req.body;

    const querry = `SELECT * FROM admin Where email = ? AND password = ? `;
    db.query(querry, [email, password], (err, result) => {
        if (err) {
            console.error("Something went wrond", err);
        }
        return res.json(result);
    })
});

module.exports = router;