import PropTypes from 'prop-types'

function Button({
  children,
  primary,
  secondary,
  forest,
  alert,
  blaze,
  outline,
  rounded 
}) {
  return(
    <button className='px-3 py-1.5 border border-[#ff4500] bg-[#ff4500] text-[#fffcfa]'>
      {children}
    </button>
  )
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    forest,
    alert,
    blaze,
  }) => {
    const count = 
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!forest) +
      Number(!!alert) +
      Number(!!blaze) 
    
      if (count > 1) {
        return new Error('Only one of primary, secondary, forest, alert or blaze can be true')
      }
  }
}

export default Button