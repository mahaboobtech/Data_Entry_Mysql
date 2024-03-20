const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path')

const app = express();
const port = 8080;

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tempUser',
    password: 'password',
    database: 'user'
});


const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/submit', (req, res) => {
    const { name, email, age, dob } = req.body;

    // Server-side validation
    if (!name || !email || !age || !dob) {
        return res.json({ success: false });
    }

    if (isNaN(age) || parseInt(age) <= 0) {
        return res.json({ success: false });
    }
// make sure the query is correct you have to modiy here
    const sql = "INSERT INTO userstabename (fullname, email, age, dob) VALUES (?, ?, ?, ?)";
    const values = [name, email, age, dob];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error:', err);
            res.json({ success: false });
        } else {
            console.log("1 record inserted");
            res.json({ success: true });
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
