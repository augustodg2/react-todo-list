import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ variant, action, icon, text }) => {
  const hasVariant = (wantedVariant, variants) => {
    return variant.split(' ').includes(wantedVariant)
  }

  return (
    <button
      className={ `button ${variant}` }
      onClick={ action }
      type={ hasVariant('primary') ? 'submit' : 'button' }
    >
      <i className='material-icons'>{ icon }</i>
      <span>{ text }</span>
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  action: PropTypes.func,
  icon: PropTypes.string,
  text: PropTypes.string
}

export default Button
