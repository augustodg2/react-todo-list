import React from 'react'
import PropTypes from 'prop-types'
import Overlay from './Overlay'
import Button from './Button'

const Modal = (props) => {
  return (
    <Overlay show={props.show}>
      <form className={`modal ${props.variant} ${!props.show ? 'hidden' : ''}`} onSubmit={props.onSubmit}>
        <div className="modal__header">
          <Button
            icon="close"
            action={props.onClose}
            variant="icon"
          />
          <h1>{ props.title }</h1>
        </div>
        <div className="modal__body">
          { props.children }
        </div>
        <div className="modal__footer">
          <div className="modal__buttons">
            { props.actions }
          </div>
        </div>
      </form>
    </Overlay>
  )
}

Modal.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  actions: PropTypes.element,
  children: PropTypes.element
}

export default Modal
