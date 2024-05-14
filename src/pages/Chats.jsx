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
import {processMessageToAI} from "../api/api";

const Chats = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Rex. How can I help assist you today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== "") {
      try {
        const response = await processMessageToAI(input);
        setMessages([
          ...messages,
          {message: input, sender: "user"},
          {message: response, sender: "ai"},
        ]);
        setInput("");
      } catch (error) {
        console.log("Error in handleSendMessage:", error);
        throw error;
      }
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: "90vh",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        justifyContent: "space-between",
      }}
    >
      <List sx={{display: "flex", flexDirection: "column", gap: "16px"}}>
        <Avatar
          src={Rex}
          sx={{width: 105, height: 105}}
        />
        {/* <ListItem
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
        </ListItem> */}
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
              fontWeight: 500,
              fontSize: "18px",
              width: "300px",
              py: "16px",
              px: "24px",
              borderRadius: "8px",
              color:
                message.sender === "user"
                  ? theme.palette.common.white
                  : theme.palette.grey[900],
              backgroundColor:
                message.sender === "user"
                  ? theme.palette.primary.main
                  : theme.palette.grey[100],
            }}
          >
            {message.message}
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
