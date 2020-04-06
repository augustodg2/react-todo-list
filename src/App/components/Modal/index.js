import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Overlay from '../Overlay'
import useKeyPress from '../../utils/useKeyPress'

const Modal = ({ isVisible, variant, onClose, onSubmit, children, header, footer }) => {
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
        { header }
        <div className="modal__body">
          { children }
        </div>
        { footer }
      </form>
    </Overlay>
  )
}

Modal.propTypes = {
  variant: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element
}

export default Modal
