import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  App from './screens/home/App.jsx'
import { ThemeProvider } from './ThemeProvider'
import MainRoutes from "./MainRoutes";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>
)
