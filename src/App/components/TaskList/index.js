import React, { useContext } from 'react'
import { TaskContext } from 'App/context/TasksContext'
import Task from './Task'

const TaskList = (props) => {
  const { tasks, isLoading } = useContext(TaskContext)

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul className='task-list'>
      {
        tasks.map((task) => (
          <Task key={ task.id } task={ task } />
        ))
      }
    </ul>
  )
}

export default TaskList
