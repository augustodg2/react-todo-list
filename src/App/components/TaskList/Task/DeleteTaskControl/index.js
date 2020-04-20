import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import Button from 'App/components/Button'
import DeleteTodoModal from './DeleteTodoModal'
import ModalControl from 'App/components/ModalControl'

const DeleteTaskControl = ({ taskId }) => {
  return (
    <ModalControl render={({ isVisible, toggleVisibility }) => (
      <Fragment>
        <Button
          variant="round secondary"
          icon={<MdDelete size="1rem" />}
          action={toggleVisibility}
        />
        <DeleteTodoModal
          taskId={taskId}
          isVisible={isVisible}
          handleClose={toggleVisibility}
        />
      </Fragment>
    )} />
  )
}

DeleteTaskControl.propTypes = {
  taskId: PropTypes.number
}

export default DeleteTaskControl
