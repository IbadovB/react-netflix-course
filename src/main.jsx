import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  App from './screens/App.jsx'
import { ThemeProvider } from './ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>
)
