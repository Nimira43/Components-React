import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { NavigationProvider } from './context/navigation'

// import DropdownPage from './pages/DropdownPage'
// import ButtonPage from './pages/ButtonPage'
// import AccordianPage from './pages/AccordionPage'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)


// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <NavigationProvider> 
      <App />
   </NavigationProvider> 
    
    // {/* <ButtonPage /> */}
    // {/* <AccordianPage /> */}
    // {/* <DropdownPage /> */}
  
//  </React.StrictMode>
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