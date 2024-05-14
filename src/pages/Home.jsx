import ActiveChats from "../components/ActiveChats.jsx";
import EndedChats from "../components/EndedChats.jsx";
import CreateChat from "../components/CreateChat.jsx";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@emotion/react";
import {Link} from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        
        padding: "24px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{display: "flex",  alignItems: "left", justifyContent: "left", width: "100%" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            textAlign: "left",
           
            height: 24,
            fontSize: 20,
            lineHeight: "24px",
          }}
        >
          Active Chats
        </Typography>
      </Box>
      <ActiveChats />
      <Box sx={{display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            height: 24,
            fontSize: 20,
            lineHeight: "24px",
          }}
        >
          Ended Chats
        </Typography>
        <Link
          to="/endedchats"
          style={{textDecoration: "none"}}
          sx={{textAlign: "right", aligntSelf: "right"}}
        >
          <Typography
            sx={{
              width: 184,
              height: 22,
              fontSize: 16,
              textDecoration: "none",
              underline: "none",
              color: theme.palette.primary.main,
              textAlign: "right",
              fontWeight: 500,
            }}
          >
            See All
          </Typography>
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
