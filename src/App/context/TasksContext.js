import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import TaskReducer from 'App/reducer/TaskReducer'

const initialState = {
  isLoading: true,
  tasks: []
}

export const TaskContext = createContext(initialState)

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const fetchTasks = async () => {
    try {
      // FETCH FROM API
      console.log('Fetching from API...')
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
      const response = await axios.get(url)

      // UPDATES LOCAL STATE
      dispatch({ type: 'FETCH_TASKS', payload: response.data })
      console.log('Saved fetch data to local state')
    } catch (error) {
      console.error(error.message)
    }
  }

  const toggleComplete = async ({ id, completed }) => {
    try {
      // UPDATES LOCAL STATE
      dispatch({ type: 'TOGGLE_TASK', payload: { id, completed } })
      console.log('Saved update to local state')

      // PERSISTS TO API
      const url = `https://jsonplaceholder.typicode.com/todos/${id}`
      await axios.patch(url, { completed: !completed })
      console.log('Saved update to database')
    } catch (error) {
      console.error(error.message)
    }
  }

  const editTask = async ({ id, newTitle }) => {
    try {

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => { fetchTasks() }, [])

  const addTask = ({ id, newTitle }) => {

  }

  const deleteTask = (id) => {

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
