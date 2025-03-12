// Create web server
const express = require('express');
const app = express();

// Load the comments
const comments = require('./comments');

// Serve the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
const port = 4001;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});



