import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../Button'

const ModalFooter = ({ actions }) => {
  return (
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
  )
}

ModalFooter.propTypes = {
  actions: PropTypes.array
}

export default ModalFooter
