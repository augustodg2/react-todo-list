import React from 'react'
import PropTypes from 'prop-types'
import onPress from 'App/utils/onPress'
import Button from '../Button'
import { MdClose } from 'react-icons/md'

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
  onPress('Escape', () => isVisible && onClose())

  return (
    <div className={`overlay ${!isVisible ? 'hidden' : ''}`}>
      <form
        className={`modal ${variant} ${!isVisible ? 'hidden' : ''}`}
        onSubmit={ onSubmit }
      >
        <div className="modal__header">
          { closeButton && (
            <Button
              action={onClose}
              icon={<MdClose size={20} />}
            />
          )}
          <h1 className="modal__title">{title}</h1>
        </div>

        <div className="modal__body">
          { text && <p className="modal__text">{text}</p> }
          { children }
        </div>

        <div className="modal__footer">
          <div className="modal__actions">
            {
              actions.map(action => (
                <Button
                  key={action.id}
                  text={action.text}
                  variant={action.variant}
                  action={action.action} />
              ))
            }
          </div>
        </div>
      </form>
    </div>
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
