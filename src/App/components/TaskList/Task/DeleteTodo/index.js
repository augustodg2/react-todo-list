import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import Button from 'App/components/Button'
import DeleteTodoModal from './DeleteTodoModal'
import { TaskContext } from 'App/context/TasksContext'
import { OverlayContext } from 'App/context/OverlayContext'

const DeleteTaskControl = ({ taskId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { deleteTask } = useContext(TaskContext)
  const { hasOverflow } = useContext(OverlayContext)

  const toggleVisibility = () => setIsVisible(!hasOverflow)

  return (
    <div>
      <Button variant="round secondary" icon={<MdDelete size="1rem" />} action={toggleVisibility} />
      <DeleteTodoModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        onSubmit={deleteTask}
        todoId={taskId}
      />
    </div>
  )
}

DeleteTaskControl.propTypes = {
  taskId: PropTypes.number
}

export default DeleteTaskControl
