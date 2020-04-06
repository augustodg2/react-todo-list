import React from 'react'
import PropTypes from 'prop-types'

const ModalFooter = ({ children }) => {
  return (
    <div className="modal__footer">
      { children }
    </div>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.element
}

export default ModalFooter
