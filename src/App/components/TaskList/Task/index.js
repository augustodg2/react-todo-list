import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { TaskContext } from 'App/context/TasksContext'
import TaskOptions from './TaskOptions'
import EditTaskControl from './EditTaskControl'
import DeleteTaskControl from './DeleteTaskControl'

const Task = ({ task }) => {
  const { id, title, completed } = task
  const { toggleComplete } = useContext(TaskContext)

  return (
    <li className={ `task ${completed && 'completed'}` }>
      <input
        id={`task-${id}`}
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(task)}
      />
      <label htmlFor={`task-${id}`}>{ title }</label>
      <TaskOptions>
        <EditTaskControl task={{ title, completed }} />
        <DeleteTaskControl taskId={id} />
      </TaskOptions>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
