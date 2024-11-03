const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(bodyParser.json());

// test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define routes
app.use('/api/items', require('./routes/itemRoutes'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
