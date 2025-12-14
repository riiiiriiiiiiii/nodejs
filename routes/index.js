const express = require('express');
const fetch = require('node-fetch'); // using node-fetch for API calls
const app = express();

const PORT = process.env.PORT || 8080;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Make sure this is set in Railway

app.use(express.json());

// Chat endpoint
app.post('/v1/chat/completions', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-5.2-chat-latest',
        messages: req.body.messages
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Simple root route
app.get('/', (req, res) => {
  res.send('GPT-5.2 Proxy is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

