import Button from './Button'
// import './index.css'

function App() {
  return (
    <div>
      <div>
        <Button success outline>Login</Button>
      </div>
      <div>
        <Button secondary outline rounded>Register</Button>
      </div>
      <div>
        <Button warning outline rounded>Submit</Button>
      </div>
      <div>
        <Button danger rounded>Cancel</Button>
      </div>
      <div>
        <Button primary rounded>Cancel</Button>
      </div>
    </div>
  )
}

export default App