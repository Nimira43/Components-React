import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

function Button({
  children,
  primary,
  dark, 
  forest, 
  alert,
  blaze, 
  outline, 
  rounded
}) {
    return (
    <button className='px-3 py-1.5 border border-primary bg-primary text-light'>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  dark: PropTypes.bool,
  forest: PropTypes.bool,
  alert: PropTypes.bool,
  blaze: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: PropTypes.func,
}

Button.propTypes.checkVariationValue = ({
  primary,
  dark,
  forest,
  alert,
  blaze,
}) => {
  const count = 
    Number(!!primary) +
    Number(!!dark) +
    Number(!!forest) +
    Number(!!alert) +
    Number(!!blaze)

  if (count > 1) {
    return new Error('Only one of primary, dark, forest, alert, or blaze can be true')
  }
}

export default Button
