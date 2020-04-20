import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import useModalFocus from 'App/utils/useModalFocus'
import useTextField from 'App/utils/useTextField'
import { TaskContext } from 'App/context/TasksContext'

const EditTaskModal = ({
  task,
  isVisible,
  handleClose
}) => {
  const { editTask } = useContext(TaskContext)

  const titleInputRef = useModalFocus(isVisible)

  const [title, , titleField] = useTextField({
    label: 'Task title',
    ref: titleInputRef,
    defaultValue: task.title
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title === task.title) return handleClose()

    const { id } = task
    editTask({ id, newTitle: title })
    handleClose()
  }

  return (
    <Modal
      variant="bottom"
      isVisible={isVisible}
      onClose={handleClose}
      onSubmit={handleSubmit}
      title="Edit Task..."
      closeButton
      actions={[
        { id: 0, variant: 'primary', text: 'Save' },
        { id: 1, variant: 'secondary', action: handleClose, text: 'Cancel' }
      ]}
    >
      { titleField }
    </Modal>
  )
}

EditTaskModal.propTypes = {
  task: PropTypes.object,
  handleClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default EditTaskModal
