import { AppBar, Avatar, Box, Typography } from "@mui/material"
import ReX from "../assets/ReX.png"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { useTheme } from "@emotion/react";



const Navigation = () => {

  const theme = useTheme();
  return (
    <AppBar sx={{backgroundColor: theme.palette.grey[50], position: "sticky", top: 0, boxShadow: "none", padding: "24px"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: theme.palette.grey[900], gap: 2}}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={ReX} sx={{width: 28, height: 28}}/>
          <Typography variant="h6" sx={{ width: 24, height: 24 }} fontWeight={700}>ReX</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CommentOutlinedIcon />
          <SettingsOutlinedIcon />
        </Box>
      </Box>
    </AppBar>
  )
}

export default Navigation