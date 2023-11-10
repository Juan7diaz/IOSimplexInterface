import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Keyboard from './inputPad/Keyboard.jsx'
import Display from './display/Display.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Display />
  </React.StrictMode>,
)
