import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import muiTheme from './styles/muiTheme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
