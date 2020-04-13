import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import TaskReducer from 'App/reducer/TaskReducer'

const initialState = {
  isLoading: true,
  error: '',
  tasks: []
}

export const TaskContext = createContext(initialState)

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const fetchTasks = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
      const response = await axios.get(url)
      dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'FETCH_TASKS_FAIL', payload: error.message })
    }
  }

  useEffect(() => {
    state.isLoading && fetchTasks()
  }, [state.isLoading])

  const editTask = ({ id, newTitle }) => {

  }

  const addTask = ({ id, newTitle }) => {

  }

  const deleteTask = (id) => {

  }

  const toggleComplete = (id) => {

  }

  return (
    <TaskContext.Provider value={{
      tasks: state.tasks,
      isLoading: state.isLoading,
      error: state.error,
      addTask,
      editTask,
      deleteTask,
      toggleComplete
    }}>
      { children }
    </TaskContext.Provider>
  )
}

TaskProvider.propTypes = {
  children: PropTypes.node
}
