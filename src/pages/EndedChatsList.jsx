import { Box } from "@mui/material"
import EndedChats from "../components/EndedChats"

const EndedChatsList = () => {
  return (
  
    <Box sx={{display: "flex", flexDirection: "column", gap: "24px", padding: "24px"}}>
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <EndedChats />
      <EndedChats />
    </Box>
    
  )
}

export default EndedChatsList