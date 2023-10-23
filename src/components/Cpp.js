import React, { useState } from 'react';
import axios from 'axios';

const Cpp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    setMessages((prevMessages) => [...prevMessages, { text: input, user: true }]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/send-message', { message: input });
      const botResponse = response.data.response;
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, user: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Chat with ChatGPT-3.5</h1>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: message.user ? '#e0e0e0' : '#b2ebf2',
              padding: '5px 10px',
              margin: '5px',
              borderRadius: '5px',
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '300px', padding: '5px', marginRight: '10px' }}
        />
        <button style={{ padding: '5px 10px' }} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Cpp;
