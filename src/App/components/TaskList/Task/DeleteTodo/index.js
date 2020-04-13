import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import Button from 'App/components/Button'
import DeleteTodoModal from './DeleteTodoModal'

const DeleteTodo = ({
  todoId,
  hasOverflow,
  setHasOverflow,
  deleteTodo
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!hasOverflow)
  useEffect(() => setHasOverflow(isVisible), [isVisible])

  return (
    <div>
      <Button variant="round secondary" icon={<MdDelete size="1rem" />} action={toggleVisibility} />
      <DeleteTodoModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        onSubmit={deleteTodo}
        todoId={todoId}
      />
    </div>
  )
}

DeleteTodo.propTypes = {
  todoId: PropTypes.number,
  deleteTodo: PropTypes.func,
  setHasOverflow: PropTypes.func,
  hasOverflow: PropTypes.bool
}

export default DeleteTodo
