import ActiveChats from "../components/ActiveChats.jsx";
import EndedChats from "../components/EndedChats.jsx";
import CreateChat from "../components/CreateChat.jsx";
import {Box, Typography} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const Home = () => {

  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap:"24px", padding: "24px" }}>
      <Typography sx={{fontWeight: 700, width: 380, height:24, fontSize: 20, lineHeight:"24px"}}>Active Chats</Typography>
      <ActiveChats />
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Typography variant="h2" sx={{fontWeight: 700, width: 380, height:24, fontSize: 20, lineHeight:"24px"}}>Ended Chats</Typography>
        <Link to="/endedchats" style={{ textDecoration: "none" }}>
          <Typography sx={{width:184, height: 22, fontSize: 16, textDecoration: "none", underline: "none", color: theme.palette.primary.main, textAlign: "right", fontWeight: 500}}>See All</Typography>
        </Link>
      </Box>
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <CreateChat />
    </Box>
  );
};

export default Home;
