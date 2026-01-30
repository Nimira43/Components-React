import React from 'react'
import Table from '../components/Table'
import { fruits } from '../data/appData'

function TablePage() { 
  
  return (
    <div>
      <Table data={fruits} />
    </div>
  )
}

export default TablePage