import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Button({
  children,
  primary = false,
  dark = false,
  forest = false,
  alert = false,
  blaze = false,
  outline = false,
  rounded = false,
  ...rest
}) {
  const classes = classNames(
    'px-3 py-1.5 border',
    {
      'border-primary bg-primary text-light': primary && !outline,
      'border-dark bg-dark text-light': dark && !outline,
      'border-forest bg-forest text-light': forest && !outline,
      'border-alert bg-alert text-dark': alert && !outline,
      'border-blaze bg-blaze text-light': blaze && !outline,
      'bg-transparent': outline,
      'text-primary': outline && primary,
      'text-dark': outline && dark,
      'text-forest': outline && forest,
      'text-alert': outline && alert,
      'text-blaze': outline && blaze,
      'rounded-xl': rounded,
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
