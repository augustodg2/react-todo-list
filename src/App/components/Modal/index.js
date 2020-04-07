import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Overlay from '../Overlay'
import useKeyPress from '../../utils/useKeyPress'
import ModalHeader from './Header'
import ModalFooter from './Footer'

const Modal = ({ isVisible, variant, onClose, onSubmit, children, title, closeButton, actions }) => {
  const escPress = useKeyPress('Escape')

  useEffect(() => {
    if (escPress && isVisible) { onClose() }
  }, [escPress])

  return (
    <Overlay isVisible={isVisible}>
      <form
        className={`modal ${variant} ${!isVisible ? 'hidden' : ''}`}
        onSubmit={ onSubmit }
      >
        <ModalHeader title={title} closeButton={closeButton} />
        <div className="modal__body">
          { children }
        </div>
        <ModalFooter actions={actions} />
      </form>
    </Overlay>
  )
}

Modal.propTypes = {
  variant: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  closeButton: PropTypes.bool,
  actions: PropTypes.array,
  children: PropTypes.element
}

export default Modal
