import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Modal from 'App/components/Modal'
import useModalFocus from 'App/utils/useModalFocus'
import useTextField from 'App/utils/useTextField'
import { TaskContext } from 'App/context/TasksContext'

const EditTaskModal = ({
  task,
  isVisible,
  onClose
}) => {
  const titleInputRef = useModalFocus(isVisible)
  const { editTask } = useContext(TaskContext)
  const [title, , titleField] = useTextField({
    label: 'Task title',
    ref: titleInputRef,
    defaultValue: task.title
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if (title === task.title) return onClose()
    const { id } = task
    editTask({ id, newTitle: title })
    onClose()
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

EditTaskModal.propTypes = {
  task: PropTypes.object,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default EditTaskModal
