import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const modal = <Modal onClose={handleClose} />

  return (
    <div>
      <Button 
        prime
        onClick={handleClick}  
      >
        Open Modal
      </Button>
      {showModal &&
        
      }
    </div>
  )
}
export default ModalPage