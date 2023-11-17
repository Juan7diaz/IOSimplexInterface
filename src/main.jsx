import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Index />
    </ThemeProvider>
  </React.StrictMode>
);
