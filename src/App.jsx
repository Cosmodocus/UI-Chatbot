import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import Start from './pages/Start.jsx'
import EndedChatsList from './pages/EndedChatsList.jsx'
import Chats from './pages/Chats.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react'


const App = () => {
  const theme = useTheme();
  return (
  
    <Box sx={{background: theme.palette.grey[50] }}>
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/endedchats" element={<EndedChatsList />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </Router>
    </Box>
    

  )
}

export default App