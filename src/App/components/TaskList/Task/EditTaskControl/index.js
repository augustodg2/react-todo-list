import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdEdit } from 'react-icons/md'
import Button from 'App/components/Button'
import EditTodoModal from './EditTodoModal'

const EditTaskControl = ({
  task,
  hasOverflow,
  setHasOverflow,
  editTodo
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!hasOverflow)
  useEffect(() => setHasOverflow(isVisible), [isVisible])

  if (task.completed) return null

  return (
    <div>
      <Button variant="round secondary" icon={<MdEdit size="1rem" />} action={toggleVisibility} />
      <EditTodoModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        onSubmit={editTodo}
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
