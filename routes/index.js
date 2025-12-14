const express = require('express');
const path = require('path');
const router = express.Router();

// Serve index.html for root
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Test /v1/models route
router.get('/v1/models', (req, res) => {
  res.json({ data: [{ id: "gpt-5.1-chat-latest" }] });
});

module.exports = router;
