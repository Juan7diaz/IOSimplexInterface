import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/landingPage'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>
);
