import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTodo from '../AddTodo'
import Header from '../Header'
import TodoList from '../TodoList'
import './Index.css'
import axios from 'axios'
import uuid from 'uuid'

export class Index extends Component {
  static propTypes = {
    todos: PropTypes.array,
    toggleComplete: PropTypes.func,
    addTodo: PropTypes.func,
    editTodo: PropTypes.func,
    deleteTodo: PropTypes.func
  }

  state = {
    todos: []
  }

  componentDidMount () {
    this.mockAPI('getTodos')
  }

  render () {
    if (this.state.loading) {
      return <h2>Loading todos...</h2>
    } else {
      return (
        <div className='wrapper'>
          <Header />
          <TodoList
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            toggleComplete={this.toggleComplete}
          />
          <AddTodo addTodo={ this.addTodo } />
        </div>
      )
    }
  }

  mockAPI = (action, data) => {
    const refreshTodos = (newTodos) => {
      this.setState({
        todos: newTodos
      })
    }

    let newTodos = false

    switch (action) {
      case 'add': {
        newTodos = [...this.state.todos, data]
        break
      }
      case 'delete': {
        newTodos = [
          ...this.state.todos.filter(
            todo => todo.id !== data.id
          )
        ]
        break
      }
      case 'toggleComplete': {
        newTodos = this.state.todos.map(todo => {
          if (todo.id === data.id) {
            todo.completed = !todo.completed
          }
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
        console.log('getTodos')
        this.setState({ loading: true })

        axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(res => {
            newTodos = todoAdapter(res.data)
            newTodos = newTodos.slice(0, 6)

            this.setState({ loading: false })
            refreshTodos(newTodos)
          })
        break
      }
      case 'edit': {
        break
      }
    }

    if (newTodos) {
      refreshTodos(newTodos)
    }
  }

  addTodo = (title) => {
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

  editTodo = (id) => {
    this.mockAPI('edit', { id })
  }

  toggleComplete = (id) => {
    this.mockAPI('toggleComplete', { id })
  }
}

export default Index
