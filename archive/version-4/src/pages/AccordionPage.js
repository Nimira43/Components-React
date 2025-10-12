import React from 'react'
import { items } from './planetsInfo/planets'
import Accordion from '../components/Accordion'

function AccordionPage() { 
  return <Accordion items={items}/>
}

export default AccordionPage