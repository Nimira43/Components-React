import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button prime>
        Open Modal
      </Button>
      <Modal />
    </div>
  )
}
export default ModalPage