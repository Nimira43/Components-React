import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

function Button({
  children,
  prime,
  support,
  dark, 
  forest, 
  alert,
  blaze, 
  inform,
  outline, 
  rounded
}) {
  const classes = twMerge(
    className('px-3 py-1.5 border rounded-md', {
      'border-prime bg-prime text-light': prime,
      'border-support bg-support text-light': support,
      'border-dark bg-dark text-light': dark,
      'border-forest bg-forest text-light': forest,
      'border-alert bg-alert text-dark': alert,
      'border-blaze bg-blaze text-light': blaze,
      'border-inform bg-inform text-light': inform,
      'rounded-full': rounded,
      'bg-light': outline,
      'text-prime': outline && prime,
      'text-support': outline && support,
      'text-dark': outline && dark,
      'text-forest': outline && forest,
      'text-alert': outline && alert,
      'text-blaze': outline && blaze,
      'text-inform': outline && inform
    })
  )
  return (
    <button className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  prime: PropTypes.bool,
  support: PropTypes.bool,
  dark: PropTypes.bool,
  forest: PropTypes.bool,
  alert: PropTypes.bool,
  blaze: PropTypes.bool,
  inform: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: PropTypes.func,
}

Button.propTypes.checkVariationValue = ({
  prime,
  support,
  dark,
  forest,
  alert,
  blaze,
  inform,
}) => {
  const count = 
    Number(!!prime) +
    Number(!!support) +
    Number(!!dark) +
    Number(!!forest) +
    Number(!!alert) +
    Number(!!blaze) +
    Number(!!inform)

  if (count > 1) {
    return new Error('Only one of prime, support, dark,forest, alert, blaze or inform can be true')
  }
}

export default Button
