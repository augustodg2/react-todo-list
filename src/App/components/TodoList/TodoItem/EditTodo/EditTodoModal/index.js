import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import useModalFocus from 'App/utils/useModalFocus'
import useTextField from 'App/utils/useTextField'

const EditTodoModal = ({
  todo,
  isVisible,
  onSubmit: editTodo,
  onClose
}) => {
  const titleInputRef = useModalFocus(isVisible)

  const [title, , titleField] = useTextField({
    label: 'Task title',
    ref: titleInputRef,
    defaultValue: todo.title
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (title === todo.title) return onClose()

    const { id } = todo
    console.log(todo)
    editTodo(id, title) || onClose()
  }

  return (
    <Modal
      variant="bottom"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Edit Task..."
      closeButton
      actions={[
        { id: 0, variant: 'primary', text: 'Save' },
        { id: 1, variant: 'secondary', action: onClose, text: 'Cancel' }
      ]}
    >
      { titleField }
    </Modal>
  )
}

EditTodoModal.propTypes = {
  todo: PropTypes.object,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default EditTodoModal
