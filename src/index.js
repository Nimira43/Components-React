import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import ButtonPage from './pages/ButtonPage'
import AccordianPage from './pages/AccordionPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ButtonPage /> */}
    <AccordianPage />
  </React.StrictMode>
)

/**
 * Notes 
 * 
 * To switch to previous components uncomment
 * the relevant import and component call.
 * Comment out the import and component call
 * not needed.
 * 
 */