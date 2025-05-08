import React from 'react'
import { items } from './planetsInfo/planets'
import Accordion from '../components/Accordion'

function App() { 
  return <Accordion items={items}/>
}

export default App