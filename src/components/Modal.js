import ReactDOM from 'react-dom'

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='absolute inset-0 bg-grey-2 opacity-80'
        onClick={onClose}
      ></div>
      <div className='relative w-11/12 max-w-lg mx-auto bg-light rounded-md shadow-md p-6'>
        <div className='flex flex-col justify-between h-full space-y-4'>
          {children}
          <div className='flex justify-end space-x-2'>
            {actionBar}
          </div> 
        </div>       
      </div>
    </div>,
    document.querySelector('.modal-container')
  )
}
export default Modal