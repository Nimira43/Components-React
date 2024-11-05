import Button from './Button'
import './index.css'

function App() {
  return (
    <>
      <h1>Components React</h1>
      <div className='solid'>
        {/* <Button /> */}
        <button className='btn-dark'>Dark</button>
        <button className='btn-light'>Light</button>
        <button className='btn-mist'>Mist</button>
        <button className='btn-wisdom'>Wisdom</button>
        <button className='btn-ember'>Ember</button>
        <button className='btn-accept'>Accept</button>
        <button className='btn-gold'>Gold</button>
        <button className='btn-blaze'>Blaze</button>
      </div>
      <div className='outline'>  
        <button className='btn-dark-outline'>Dark</button>
        <button className='btn-light-outline'>Light</button>
        <button className='btn-mist-outline'>Mist</button>
        <button className='btn-wisdom-outline'>Wisdom</button>
        <button className='btn-ember-outline'>Ember</button>
        <button className='btn-accept-outline'>Accept</button>
        <button className='btn-gold-outline'>Gold</button>
        <button className='btn-blaze-outline'>Blaze</button>
      </div>
    </>
    
  )
}

export default App