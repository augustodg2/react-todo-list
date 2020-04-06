import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ children, isVisible }) => {
  return (
    <div className={`overlay ${!isVisible ? 'hidden' : ''}`}>
      { children }
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.element,
  isVisible: PropTypes.bool
}

export default Overlay
