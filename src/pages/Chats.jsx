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
import {useTheme} from "@emotion/react";
import SendIcon from "@mui/icons-material/Send";

const Chats = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, {text: input, sender: "user"}]);
      setInput("");
    }
  };

  
  return (
    <Paper elevation={0} sx={{height:"90vh", padding: "24px", display: "flex", flexDirection: "column", gap: "48px", justifyContent: "space-between", }}>
      <List sx={{ display: "flex", flexDirection: "column", gap: "16px",  }}>
        <Avatar
          src={Rex}
          sx={{width: 105, height: 105, }}
        />
        <ListItem
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[100],
            width: "300px",
            py: "16px",
            px: "24px",
            borderRadius: "8px",
            
          }}
        >
          Hello Andrew! I&apos;m ReX 😁
        </ListItem>
        <ListItem
          sx={{
            fontWeight: 500,
            fontSize: "18px",
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[100],
            width: "300px",
            py: "16px",
            px: "24px",
            borderRadius: "8px",
          }}
        >
          What aspect of your career would you like guidance on?
        </ListItem>
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              alignSelf: "flex-end",
              fontWeight: 500,
              fontSize: "18px",
              width: "300px",
              py: "16px",
              px: "24px",
              borderRadius: "8px",
              color: theme.palette.common.white,
              backgroundColor: theme.palette.primary.main,
            }}
          >
            {message.text}
          </ListItem>
        ))}
      </List>
      <Box sx={{display: "flex", gap: "12px", alignItems: "center"}}>
        <TextField
          sx={{
            alignSelf: "flex-end",
            width: 300,
            height: 56,
            backgroundColor: theme.palette.grey[50],
            border: "none",
            outline: "none",
          }}
          label="Type a message to ReX..."
          onChange={handleInputChange}
          value={input}
        />
        <Button
          onClick={handleSendMessage}
          sx={{
            width: 56,
            height: 56,
            backgroundColor: theme.palette.primary.main,
            " &:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          <SendIcon
            sx={{width: 24, height: 24, color: theme.palette.common.white}}
          />
        </Button>
      </Box>
    </Paper>
  );
};

export default Chats;
