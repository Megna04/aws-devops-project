// Import the Express library
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port on which the server will run
const port = 3000;

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, AWS DevOps!');
});

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

