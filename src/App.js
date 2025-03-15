import React from 'react'
import Button from './Button'
import './index.css'

function App() {
  return (
    <div className='bg-[#777]'>
      <div>
        <Button prime>Login</Button>
      </div>
      <div>
        <Button support>Register</Button>
      </div>
      <div>
        <Button dark>Submit</Button>
      </div>
      <div>
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
      <div>
        <Button prime rounded>Rounded</Button>
      </div>
      <div>
        <Button support rounded>Buttons</Button>
      </div>
      <div>
        <Button prime outline>Outline</Button>
      </div>
      <div>
        <Button support outline>Buttons</Button>
      </div>
      <div>
        <Button dark outline>Outline</Button>
      </div>
      <div>
        <Button light outline>Buttons</Button>
      </div>
      <div>
        <Button forest outline>Outline</Button>
      </div>
      <div>
        <Button alert outline>Buttons</Button>
      </div>
      <div>
        <Button blaze outline>Outline</Button>
      </div>
      <div>
        <Button inform outline>Buttons</Button>
      </div>
    </div>
  )
}

export default App
