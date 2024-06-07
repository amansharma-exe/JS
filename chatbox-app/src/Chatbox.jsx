import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

// Chatbox component that handles the chat functionality
function Chatbox() {
  // State to manage chat messages and input field
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to handle sending of messages
  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  // Function to handle input field change
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle Enter key press for sending messages
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message"
        />
        <Button variant="contained" color="primary" onClick={handleSend} style={{ marginLeft: '10px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Chatbox;
