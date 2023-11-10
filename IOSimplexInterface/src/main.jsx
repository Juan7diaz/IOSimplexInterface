import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/landingPage'
import Display from './display/Display'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage />
    <Display />
  </React.StrictMode>
)
