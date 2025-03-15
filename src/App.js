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
    </div>
  )
}

export default App
