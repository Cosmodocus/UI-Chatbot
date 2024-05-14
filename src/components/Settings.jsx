import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CancelPresentationRoundedIcon from "@mui/icons-material/CancelPresentationRounded";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { useTheme } from "@emotion/react";

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();

  return (
    <div>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
        sx={{ width:"28px", height:"28px", padding: 0}}
      >
        <MoreHorizRoundedIcon sx={{color: theme.palette.grey[900], border: "2px solid", borderRadius: "50%",}}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{width: "300px", height: "300px", borderRadius: "16px", py: "20px", px: "28px"}}
      >
        <MenuItem
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setAnchorEl(null)}
        >
          <CancelPresentationRoundedIcon />Clear Chat
        </MenuItem>
        <MenuItem
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setAnchorEl(null)}
        >
          <SystemUpdateAltRoundedIcon />Export Chat
        </MenuItem>
        <MenuItem
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setAnchorEl(null)}
        >
          <ExitToAppRoundedIcon />End Session
        </MenuItem>
      </Menu>
    </div>
  );
}
