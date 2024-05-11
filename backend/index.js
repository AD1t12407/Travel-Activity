const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user'); 

require('dotenv').config();

const app = express();
const port = 3000;

// middleware to parse incoming JSON data
app.use(bodyParser.json());

// replacing the MongoDB connection string with the environment variable
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//defining routes
app.get('/', (req, res) => {
    res.send('Hello! Welcome to Travel-Activity App!!');
});

app.get('/about', (req, res) => {
    res.send('About TraVity');
});

app.post('/users/register', async (req, res) => {
    try {
        
        const { username, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create new user document
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/users/login', async (req, res) => {
    try {
       
        const { email, password } = req.body;

        // Find user by email and password
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token (Example: using jsonwebtoken library)

        const jwtToken = generateJWTToken(user); //gotta defineeee
        res.json({ token: jwtToken }); //  token back to the client
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/itinerary', (req, res) => {
    // Handle itinerary related requests

});

app.post('/itinerary/details', (req, res) => {
   

});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
