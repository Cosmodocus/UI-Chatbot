import {Avatar, Box, Button, Typography} from "@mui/material";
import ReX from "../assets/ReX.png";
import {useTheme} from "@emotion/react";
import { Link } from "react-router-dom";

const Start = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        gap: "48px",
      }}
    >
      <Box
        sx={{
          width: 350,
          height: 399,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 278,
            height: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src={ReX}
            sx={{width: 209, height: 209}}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{fontSize: "32px", fontWeight: 700, lineHeight: "38px"}}
        >
          Welcome, Andrew! 👋
        </Typography>
        <Typography
          variant="h2"
          sx={{fontSize: "24px", fontWeight: 700, lineHeight: "28px"}}
        >
          Receive Career Help from ReX!
        </Typography>
        <Typography
          variant="h3"
          sx={{fontSize: "18px", fontWeight: 500, lineHeight: "21px"}}
        >
          Start a Conversation with ReX right now!
        </Typography>
        <Link to="/home">
          <Button
            sx={{
              width: "348px",
              height: "22px",
              padding: "28px 26px",
              gap: "10px",
              borderRadius: "100px",
              backgroundColor: theme.palette.primary.main, // Use primary color from theme
              color: theme.palette.common.white,
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark, // Use dark color from theme
              },
            }}
          >
            Start Chat with ReX
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Start;
