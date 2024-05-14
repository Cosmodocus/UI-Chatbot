import {AppBar, Avatar, Box, Typography} from "@mui/material";
import ReX from "../assets/ReX.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import {useTheme} from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Link, useLocation} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SettingsMenu from "./Settings";


const Navigation = () => {
  const location = useLocation();

  const theme = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[50],
        position: "sticky",
        top: 0,
        boxShadow: "none",
        padding: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: theme.palette.grey[900],
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {location.pathname === "/" || location.pathname === "/home" ? (
            <Avatar
              src={ReX}
              sx={{width: 28, height: 28}}
            />
          ) : (
            <Link to="/home">
              <ArrowBackIcon
                sx={{width: 28, height: 28, color: theme.palette.grey[900]}}
              />
            </Link>
          )}
          {location.pathname === "/endedchats" ? (
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
          ) : (
            <Typography
              variant="h6"
              sx={{width: 24, height: 24}}
              fontWeight={700}
            >
              ReX
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {location.pathname === "/" || location.pathname === "/home" ? (
            <CommentOutlinedIcon />
          ) : (
            <SearchIcon sx={{width: 28, height: 28}} />
          )}
          {location.pathname === "/chat" || location.pathname === "/endedchats" ? <SettingsMenu sx={{width: 28, height: 28}}/> : <SettingsOutlinedIcon sx={{width: 28, height: 28}}/>}
          
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navigation;
