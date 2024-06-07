import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import Chatbox from "./Chatbox";
import ChatIcon from "@mui/icons-material/Chat";
/* function App() {
  return <div className="App">Sup!</div>;
} */

//App  component for the main layout

function App() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to React Chatbox <ChatIcon color="primary" />
        </Typography>
        <Chatbox />
      </Paper>
    </Container>
  );
}

export default App;
