import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import axios from 'axios'
import uuid from 'uuid'
import AddTodo from '../components/AddTodo'
import { TaskProvider } from 'App/context/TasksContext'

export class Index extends Component {
  static propTypes = {
    todos: PropTypes.array,
    toggleComplete: PropTypes.func,
    addTodo: PropTypes.func,
    editTodo: PropTypes.func,
    deleteTodo: PropTypes.func
  }

  state = {
    todos: [],
    hasOverflow: false
  }

  // componentDidMount () {
  //   this.mockAPI('getTodos')
  // }

  render () {
    if (this.state.loading) {
      return <h2>Loading todos...</h2>
    } else {
      return (
        <div className='wrapper'>
          <TaskProvider>
            <Header />
            <TaskList
              hasOverflow={this.state.hasOverflow}
              setHasOverflow={this.setHasOverflow}
            />
            <AddTodo
              addTodo={this.addTodo}
              hasOverflow={this.state.hasOverflow}
              setHasOverflow={this.setHasOverflow}
            />
          </TaskProvider>
        </div>
      )
    }
  }

  setHasOverflow = (value) => this.setState({ hasOverflow: value })

  mockAPI = (action, data) => {
    let newTodos = false
    const refreshTodos = (newTodos) => this.setState({ todos: newTodos })

    switch (action) {
      case 'add': {
        newTodos = [...this.state.todos, data]
        break
      }

      case 'delete': {
        newTodos = [...this.state.todos.filter(
          todo => todo.id !== data.id
        )]
        break
      }

      case 'toggleComplete': {
        newTodos = this.state.todos.map(todo => {
          if (todo.id !== data.id) return todo
          todo.completed = !todo.completed
          return todo
        })
        break
      }

      case 'getTodos': {
        const todoAdapter = externalTodos => {
          return externalTodos.map(externalTodo => ({
            id: externalTodo.id,
            title: externalTodo.title,
            completed: externalTodo.completed
          }))
        }

        this.setState({ loading: true })
        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
            newTodos = todoAdapter(res.data).slice(0, 6)
            refreshTodos(newTodos)
            this.setState({ loading: false })
          })
        break
      }

      case 'edit': {
        // Send PUT to API
        // Update state array
        newTodos = this.state.todos.map(todo => {
          if (todo.id !== data.id) return todo
          todo.title = data.title
          return todo
        })
        break
      }
    }

    if (newTodos) refreshTodos(newTodos)
  }

  addTodo = ({ title }) => {
    function getTodo () {
      return {
        id: uuid.v4(),
        title,
        completed: false
      }
    }

    const newTodo = getTodo()
    this.mockAPI('add', newTodo)
  }

  deleteTodo = (id) => {
    this.mockAPI('delete', { id })
  }

  editTodo = (id, title) => {
    this.mockAPI('edit', { id, title })
  }

  toggleComplete = (id) => {
    this.mockAPI('toggleComplete', { id })
  }
}

export default Index
