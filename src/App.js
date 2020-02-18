import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid'

import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About'

import './App.css'

class App extends Component {
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
      <Router>
        <div className="App">
          <Header addTodo={ this.addTodo } />

          <Route exact path="/" render={ (props) => (
            <>
              <AddTodo addTodo={ this.addTodo } />
              <Todos
                todos={ this.state.todos }
                toggleComplete={ this.toggleComplete }
                deleteTodo={ this.deleteTodo }
              />
            </>
          )} />

          <Route path='/about' component={About} />
        </div>
      </Router>
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

export default App
