import React from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ children, show }) => {
  return (
    <div className={`overlay ${!show ? 'hidden' : ''}`}>
      { children }
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool
}

export default Overlay
