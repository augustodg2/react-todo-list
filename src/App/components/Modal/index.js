import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Overlay from '../Overlay'
import useKeyPress from '../../utils/useKeyPress'
import ModalHeader from './Header'
import ModalFooter from './Footer'

import { OverlayContext } from 'App/context/OverlayContext'

const Modal = ({
  isVisible,
  title,
  closeButton,
  actions,
  variant,
  children,
  text,
  onClose,
  onSubmit
}) => {
  const escPress = useKeyPress('Escape')
  const { setHasOverlay } = useContext(OverlayContext)

  useEffect(() => {
    setHasOverlay(isVisible)
  }, [isVisible])

  useEffect(() => {
    if (escPress && isVisible) { onClose() }
  }, [escPress])

  return (
    <Overlay isVisible={isVisible}>
      <form
        className={`modal ${variant} ${!isVisible ? 'hidden' : ''}`}
        onSubmit={ onSubmit }
      >
        <ModalHeader
          title={title}
          closeButton={closeButton}
          onClose={onClose}
        />

        <div className="modal__body">
          { text && <p className="modal__text">{text}</p> }
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
  children: PropTypes.element,
  text: PropTypes.string
}

export default Modal
