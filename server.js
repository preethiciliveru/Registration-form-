// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB connection 
mongoose.connect('setupmongodb+srv://preethiciliveru:<KoLFLdNAUoDfbbIE>@cluster0.oy0fywe.mongodb.net/?retryWrites=true&w=majority')

// MongoDB schema and model
const userSchema = new mongoose.Schema({
    username: string,
    email: string,
    password:string,
});

const User = mongoose.model('User', userSchema);

// Route to serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission and store user data
app.post('/register', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
  newUser.save((err) => {
        if (err) {
            console.log(err);
            res.send('Registration failed.');
        } else {
            res.send('Registration successful!');
        }
    });
});
// Server listening on port 3000
app.listen(PORT, () => {
    } )