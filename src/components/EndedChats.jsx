import { Avatar, Box, Typography } from "@mui/material"
import ReX from "../assets/ReX.png"
import { useTheme } from "@emotion/react";
const EndedChats = () => {
  const theme = useTheme()
  return (
   
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        borderRadius: 32,
        backgroundColor: theme.palette.common.white,
        padding: "24px"}}>
        <Box>
          <Avatar src={ReX} sx={{width: 80, height: 80}}/>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
          <Typography variant="h4" sx={{fontWeight: 700, fontSize: 18}}>ReX <span>— Dec 09, 2022</span></Typography>
          <Typography variant="h6" sx={{fontWeight: 500, fontSize: 14, color: theme.palette.grey[700]}}>Hello Andrew! I&apos;m Rex</Typography>
        </Box>
      </Box>
    
  )
}

export default EndedChats