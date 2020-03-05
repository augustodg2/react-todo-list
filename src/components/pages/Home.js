import React, { Component } from 'react'
import uuid from 'uuid'
import AddTodo from '../AddTodo'
import Todos from '../Todos'

export class Home extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Beijar Bertha',
        completed: false
      }
    ]
  }

  render () {
    return (
      <>
        <AddTodo addTodo={ this.addTodo } />
        <Todos
          todos={ this.state.todos }
          toggleComplete={ this.toggleComplete }
          deleteTodo={ this.deleteTodo }
        />
      </>
    )
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

    deleteTodo = (id) => {
      this.setState({
        todos: [...this.state.todos.filter(
          todo => todo.id !== id
        )]
      })
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
}

export default Home
