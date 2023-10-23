const express = require('express');
const cors = require('cors'); // Import the 'cors' package
const axios = require('axios');

const app = express();
const port = 5000; // Replace with your desired port

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const apiEndpoint = 'https://platform.openai.com/docs/guides/gpt/chat-completions-api';
const apiKey = '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'; // Replace with your actual API key

app.post('/api/send-message', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      apiEndpoint,
      {
        prompt: message,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const botResponse = response.data.choices[0].text.trim();
    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
