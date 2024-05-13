import {
  Paper,
  ListItem,
  List,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import Rex from "../assets/ReX.png";
import {useState} from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!input === "") {
      setMessages([...messages, {text: input, sender: "user"}]);
      setInput("");
    }
  };


  return (
    <Paper>
      <List>
        <Avatar src={Rex} />
        <ListItem>Hello Andrew, I&apos;m Rex</ListItem>
        <ListItem>
          What aspect of your career would you like guidance on?
        </ListItem>
      </List>
      <Box>
        <TextField
          label="Type a message..."
          onChange={handleInputChange}
          value={input}
          variant="outlined"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </Box>
    </Paper>
  );
};

export default Chatbot;
