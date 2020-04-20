import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import useModalFocus from 'App/utils/useModalFocus'
import useTextField from 'App/utils/useTextField'
import { TaskContext } from 'App/context/TasksContext'

const AddTaskModal = ({ isVisible, onClose: handleClose }) => {
  const titleInputRef = useModalFocus(isVisible)
  const { addTask } = useContext(TaskContext)

  const [title, setTitle, titleField] = useTextField({
    label: 'Task title',
    ref: titleInputRef
  })

  const clearField = () => setTitle('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (title === '') return null

    onClose() && addTask({ title })
  }

  const onClose = () => clearField() || handleClose()

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

AddTaskModal.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddTaskModal
