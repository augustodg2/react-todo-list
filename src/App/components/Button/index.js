import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ variant, action, icon, text }) => {
  const hasVariant = (wantedVariant, variants) => {
    return variant.split(' ').includes(wantedVariant)
  }

  return (
    <button
      data-testid="button"
      type={ hasVariant('primary') ? 'submit' : 'button' }
      className={ `button ${variant}` }
      onClick={ action }
    >
      <span data-testid="button__icon">{ icon }</span>
      <span data-testid="button__text">{ text }</span>
    </button>
  )
}

Button.defaultProps = {
  variant: ''
}

Button.propTypes = {
  variant: PropTypes.string,
  action: PropTypes.func,
  icon: PropTypes.element,
  text: PropTypes.string
}

export default Button
