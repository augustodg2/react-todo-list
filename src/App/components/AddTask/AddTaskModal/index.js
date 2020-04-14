import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import useModalFocus from 'App/utils/useModalFocus'
import useTextField from 'App/utils/useTextField'

const AddTodoModal = ({
  isVisible,
  onSubmit: addTodo,
  onClose: onCloseProp
}) => {
  const titleInputRef = useModalFocus(isVisible)

  const [title, setTitle, titleField] = useTextField({
    label: 'Task title',
    ref: titleInputRef
  })

  const clearField = () => setTitle('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (title === '') return null

    addTodo({ title }) || onClose()
  }

  const onClose = () => clearField() || onCloseProp()

  return (
    <Modal
      variant="bottom"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
      title="New Task..."
      closeButton
      actions={[
        { id: 0, variant: 'primary', text: 'Create' },
        { id: 1, variant: 'secondary', action: onClose, text: 'Cancel' }
      ]}
    >
      { titleField }
    </Modal>
  )
}

AddTodoModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddTodoModal
