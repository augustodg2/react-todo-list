import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import EditTaskControl from './EditTaskControl'
import { TaskContext } from 'App/context/TasksContext'
import DeleteTaskControl from './DeleteTodo'

const Task = ({ task, hasOverflow, setHasOverflow }) => {
  const { id, title, completed } = task
  const { toggleComplete, editTask, deleteTask } = useContext(TaskContext)

  return (
    <li className={ `todoItem ${completed ? 'completed' : ''}` }>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(task)}
      />
      <label>{ title }</label>

      <div style={{ display: 'flex' }}>
        <EditTaskControl
          task={task}
          editTodo={editTask}
          setHasOverflow={setHasOverflow}
          hasOverflow={hasOverflow}
        />

        <DeleteTaskControl
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
