const express = require('express');
const path = require('path');
const app = express();

// Automatically set the port or fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

// Serve the index.html file when someone visits the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
