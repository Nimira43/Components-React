import React from 'react'
import { items } from '../data/appData'
import Accordion from '../components/Accordion'

function AccordionPage() { 
  return <Accordion items={items}/>
}

export default AccordionPage