// For testing purposes, we export the Express app instance. In production, you would typically start the server separately.
const express = require('express');
const app = express();
app.use(express.json());

app.get('/colors', (req, res) => {
  res.json({ results: ['red', 'blue', 'green'] });
});

module.exports = app;