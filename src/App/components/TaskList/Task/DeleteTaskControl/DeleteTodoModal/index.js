import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'

import { TaskContext } from 'App/context/TasksContext'

const DeleteTodoModal = ({
  taskId,
  isVisible,
  handleClose
}) => {
  const { deleteTask } = useContext(TaskContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleClose()
    deleteTask({ id: taskId })
  }

  return (
    <Modal
      variant="center"
      isVisible={isVisible}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title="Delete Task..."
      text="Are you sure you want to delete this task?"
      actions={[
        { id: 0, variant: 'primary danger', text: 'Delete' },
        { id: 1, variant: 'secondary', action: handleClose, text: 'Cancel' }
      ]}
    />
  )
}

DeleteTodoModal.propTypes = {
  taskId: PropTypes.number,
  handleClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default DeleteTodoModal
