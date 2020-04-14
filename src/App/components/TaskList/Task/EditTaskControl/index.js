import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { MdEdit } from 'react-icons/md'
import Button from 'App/components/Button'
import EditTodoModal from './EditTodoModal'
import { OverlayContext } from 'App/context/OverlayContext'
import { TaskContext } from 'App/context/TasksContext'

const EditTaskControl = ({ task }) => {
  const [isVisible, setIsVisible] = useState(false)

  const { editTask } = useContext(TaskContext)
  const { hasOverlay } = useContext(OverlayContext)

  const toggleVisibility = () => setIsVisible(!hasOverlay)

  if (task.completed) return null

  return (
    <div>
      <Button variant="round secondary" icon={<MdEdit size="1rem" />} action={toggleVisibility} />
      <EditTodoModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        onSubmit={editTask}
        todo={task}
      />
    </div>
  )
}

EditTaskControl.propTypes = {
  task: PropTypes.object,
  editTodo: PropTypes.func,
  setHasOverflow: PropTypes.func,
  hasOverflow: PropTypes.bool
}

export default EditTaskControl
