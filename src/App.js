import React from 'react'
import Button from './Button'
import './index.css'

function App() {
  return (
    <div>
      <div>
        <Button prime>Login</Button>
      </div>
      <div>
        <Button support rounded >Register</Button>
      </div>
      <div>
        <Button dark outline>Submit</Button>
      </div>
      <div className='p-10 bg-black'>
        <Button light>Cancel</Button>
      </div>
      <div>
        <Button forest>Read more</Button>
      </div>
      <div>
        <Button alert>Logout</Button>
      </div>
      <div>
        <Button blaze>Prev</Button>
      </div>
      <div>
        <Button inform>Next</Button>
      </div>
    </div>
  )
}

export default App
