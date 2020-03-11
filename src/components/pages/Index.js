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
    this.setState({ loading: true })

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        const todos = res.data.map(todo => ({
          id: todo.id,
          title: todo.title,
          completed: todo.completed
        }))

        this.setState({
          todos,
          loading: false
        })
      })
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    })
  }

  editTodo = (id) => {
    return null
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    })
  }
}

export default Index
