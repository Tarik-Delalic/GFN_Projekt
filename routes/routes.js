const jwt = require('jsonwebtoken');
const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
const crypto = require('crypto');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'adminDb'
});

db.connect((err) => {
    if (err) {
        console.log('Something went wrong');
        return;
    }
    console.log('Connected successfully');
});

const JWT_SECRET = 'my_secret_key_here';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.redirect('/');
        // return res.status(401).json({ message: 'Access denied, token missing' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            // return res.status(403).json({ message: 'Invalid token' });
            return res.redirect('/');
        }
        req.user = user; // Attach user data to the request object
        next(); // Pass control to the next route handler
    });
}



router.post('/admin', (req, res) => {
    const { email, password } = req.body;
    
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    
    const querry = `SELECT * FROM admin Where email = ? AND password = ? `;
    
    db.query(querry, [email, hashedPassword], (err, result) => {
        if (err) {
            console.error("Something went wrong", err);
        }
        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password!!!' })
        }

        const user = result[0];

        const token = jwt.sign(
            {
                email: user.email, id: user.id
            },
            JWT_SECRET,
            { expiresIn: '1h' }

        );
        res.json({ message: 'Loged ins succesfully!!', token })
    })
});

router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected dashboard', user: req.user })
});

router.get('/fractal', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected fractal', user: req.user })
});

router.get('/rockPaperScissors', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected rockPaperScissors', user: req.user })
});
router.get('/tetris', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected tetris page', user: req.user })
})

module.exports = router;