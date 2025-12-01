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

  const actionBar = (
    <div>
      <Button
        onClick={handleClose}
        prime 
      >
        I Accept
      </Button>
    </div>
  )

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={actionBar}
    >
      <p>To do agree to the terms and conditions?</p>
    </Modal>
  )

  return (
    <div>
      <Button 
        prime
        onClick={handleClick}  
      >
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  )
}
export default ModalPage