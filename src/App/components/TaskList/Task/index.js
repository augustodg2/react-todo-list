import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import EditTaskControl from './EditTaskControl'
import DeleteTodo from './DeleteTodo'
import { TaskContext } from 'App/context/TasksContext'

const Task = ({ task, hasOverflow, setHasOverflow }) => {
  const { id, title, completed } = task
  const { toggleComplete, editTask, deleteTask } = useContext(TaskContext)

  return (
    <li className={ `todoItem ${completed ? 'completed' : ''}` }>
      <input
        id={`todo-${id}`}
        type="checkbox"
        checked={completed}
        onChange={toggleComplete(id)}
      />
      <label htmlFor={ `todo-${id}` }>
        { title }
      </label>

      <div style={{ display: 'flex' }}>
        <EditTaskControl
          task={task}
          editTodo={editTask}
          setHasOverflow={setHasOverflow}
          hasOverflow={hasOverflow}
        />

        <DeleteTodo
          todoId={id}
          deleteTodo={deleteTask}
          setHasOverflow={setHasOverflow}
          hasOverflow={hasOverflow}
        />
      </div>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  setHasOverflow: PropTypes.func,
  hasOverflow: PropTypes.bool
}

export default Task
