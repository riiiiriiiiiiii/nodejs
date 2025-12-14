const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const OPENAI_API_URL = 'https://api.openai.com/v1';

// /v1/models
router.get('/models', async (req, res) => {
  try {
    const r = await fetch(`${OPENAI_API_URL}/models`, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    res.json(await r.json());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// /v1/chat/completions
router.post('/chat/completions', async (req, res) => {
  try {
    const r = await fetch(`${OPENAI_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    res.json(await r.json());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
