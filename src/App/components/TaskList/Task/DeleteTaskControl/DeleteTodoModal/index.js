import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'

const DeleteTodoModal = ({
  todoId,
  isVisible,
  onSubmit: deleteTodo,
  onClose
}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    deleteTodo(todoId) || onClose()
  }

  return (
    <Modal
      variant="center"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Delete Task..."
      text="Are you sure you want to delete this task?"
      actions={[
        { id: 0, variant: 'primary danger', text: 'Delete' },
        { id: 1, variant: 'secondary', action: onClose, text: 'Cancel' }
      ]}
    />
  )
}

DeleteTodoModal.propTypes = {
  todoId: PropTypes.number,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default DeleteTodoModal
