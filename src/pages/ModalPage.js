import { useState, useEffect } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
import { formulaOne } from '../data/appData'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)
  const [small, setSmall] = useState(false)

  // Scroll-aware shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setSmall(window.scrollY > 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} prime>
        Ok
      </Button>
    </div>
  )

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Close Modal?</p>
    </Modal>
  )

  return (
    <div className="relative">
      <div
        className={`
          fixed bottom-4 right-4 z-50 
          transition-all duration-300 
          fade-in
          ${small
            ? 'scale-75 opacity-80'
            : 'scale-100 opacity-100'
          }
        `}
      >
        <Button
          prime
          onClick={handleClick}
          className="transition-transform duration-300 hover:scale-110 hover:shadow-xl"
        >
          Open Modal
        </Button>
      </div>

      {showModal && modal}

      <div className="mt-4">
        {formulaOne}
      </div>

    </div>
  )
}

export default ModalPage
