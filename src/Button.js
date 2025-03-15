import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'

function Button({
  children,
  prime,
  support,
  light,
  dark, 
  forest, 
  alert,
  blaze, 
  inform,
  outline, 
  rounded
}) {
  const classes = className('px-3 py-1.5 border', {
    'border-prime bg-prime text-light': prime,
    'border-support bg-support text-light': prime,
    'border-light bg-light text-dark': prime,
    'border-dark bg-dark text-light': prime,
    'border-forest bg-forest text-light': prime,
    'border-alert bg-alert text-dark': prime,
    'border-blaze bg-blaze text-light': prime,
    'border-inform bg-inform text-light': prime
  })

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
  light: PropTypes.bool,
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
  light,
  forest,
  alert,
  blaze,
  inform,
}) => {
  const count = 
    Number(!!prime) +
    Number(!!support) +
    Number(!!dark) +
    Number(!!light) +
    Number(!!forest) +
    Number(!!alert) +
    Number(!!blaze) +
    Number(!!inform)

  if (count > 1) {
    return new Error('Only one of prime, support, dark, light, forest, alert, blaze or inform can be true')
  }
}

export default Button
