import React from 'react'
import Button from './Button'
import './index.css'

function App() {
  return (
    <div>
      <div>
        <Button primary outline>Login</Button>
      </div>
      <div>
        <Button dark outline rounded>Register</Button>
      </div>
      <div>
        <Button forest outline rounded>Submit</Button>
      </div>
      <div>
        <Button alert rounded>Cancel</Button>
      </div>
      <div>
        <Button blaze rounded>Read more</Button>
      </div>
    </div>
  )
}

export default App
