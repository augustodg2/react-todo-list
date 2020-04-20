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
    const fetchFromAPI = async () => {
      const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
      const response = await axios.get(url)
      return response
    }

    const dispatchToReducer = (tasks) => dispatch({
      type: 'FETCH_TASKS',
      payload: tasks
    })

    try {
      const { data: tasks } = await fetchFromAPI()
      dispatchToReducer(tasks)
    } catch (error) {
      console.error(error.message)
    }
  }

  const addTask = async ({ title }) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000000),
      title,
      completed: false
    }

    const dispatchToReducer = () => dispatch({
      type: 'ADD_TASK',
      payload: newTask
    })

    const persistToAPI = async () => {
      const url = 'https://jsonplaceholder.typicode.com/todos'
      const response = await axios.post(url)
      return response
    }

    try {
      dispatchToReducer()
      await persistToAPI()
    } catch (error) {
      console.error(error)
    }
  }

  const toggleComplete = async ({ id, completed }) => {
    const dispatchToReducer = () => dispatch({
      type: 'TOGGLE_TASK',
      payload: { id, completed }
    })

    const persistToAPI = async () => {
      const url = `https://jsonplaceholder.typicode.com/todos/${id}`
      const response = await axios.patch(url, { completed: !completed })
      return response
    }

    try {
      dispatchToReducer()
      await persistToAPI()
    } catch (error) {
      console.error(error.message)
    }
  }

  const editTask = async ({ id, newTitle }) => {
    const dispatchToReducer = () => dispatch({
      type: 'EDIT_TASK',
      payload: { id, newTitle }
    })

    const persistToAPI = async () => {
      const url = `https://jsonplaceholder.typicode.com/todos/${id}`
      const response = await axios.patch(url, { title: newTitle })
      return response
    }

    try {
      dispatchToReducer()
      await persistToAPI()
    } catch (error) {
      console.error(error.message)
    }
  }

  const deleteTask = ({ id }) => {
    const dispatchToReducer = () => dispatch({
      type: 'DELETE_TASK',
      payload: { id }
    })

    try {
      dispatchToReducer()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => { fetchTasks() }, [])

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
      {children}
    </TaskContext.Provider>
  )
}

TaskProvider.propTypes = {
  children: PropTypes.element
}
