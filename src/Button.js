import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Button({
  children,
  primary,
  secondary,
  forest,
  alert,
  blaze,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(
    'px-3 py-1.5 border',
    {
      'border-primary bg-primary text-light': primary && !outline,
      'border-secondary bg-secondary text-light': secondary && !outline,
      'border-forest bg-forest text-light': forest && !outline,
      'border-alert bg-alert text-dark': alert && !outline,
      'border-blaze bg-blaze text-light': blaze && !outline,
      'bg-transparent': outline,
      'text-primary': outline && primary,
      'text-secondary': outline && secondary,
      'text-forest': outline && forest,
      'text-alert': outline && alert,
      'text-blaze': outline && blaze,
      'rounded-full': rounded,
      'rounded-md': !rounded,
    },
    rest.className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  forest: PropTypes.bool,
  alert: PropTypes.bool,
  blaze: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  forest: false,
  alert: false,
  blaze: false,
  outline: false,
  rounded: false,
}

Button.propTypes.checkVariationValue = ({
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
    return new Error('Only one of primary, secondary, forest, alert, or blaze can be true')
  }
}

export default Button
