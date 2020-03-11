import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    toggleComplete: PropTypes.func
  }

  render () {
    return (
      <div className='todo-list'>
        <Todos
          todos={this.props.todos}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.deleteTodo}
          toggleComplete={this.props.toggleComplete}
        />
      </div>
    )
  }
}

export default TodoList
