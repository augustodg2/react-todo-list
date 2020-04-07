import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'

const ModalFooter = ({ children, actions }) => {
  return (
    <div className="modal__footer">
      { children }
      <div className="modal__actions">
        { actions && (
          actions.map((button) => (
            <Button
              key={button.id}
              action={button.action}
              variant={button.type}
              text={button.title}
            />
          ))
        )}
      </div>

    </div>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.element,
  actions: PropTypes.array
}

export default ModalFooter
