import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { TaskContext } from 'App/context/TasksContext'
import Task from './Task'

const TaskList = (props) => {
  const { tasks, isLoading } = useContext(TaskContext)

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul className='todo-list'>
      {
        tasks.map((task) => (
          <Task
            key={ task.id }
            task={ task }
            setHasOverflow={ props.setHasOverflow}
            hasOverflow={ props.hasOverflow}
          />
        ))
      }
    </ul>
  )
}

TaskList.propTypes = {
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
  toggleComplete: PropTypes.func,
  setHasOverflow: PropTypes.func,
  hasOverflow: PropTypes.bool
}

export default TaskList
