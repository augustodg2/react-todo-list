import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

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
        {
          this.props.todos.map((todo) => (
            <TodoItem key={ todo.id }
              todo={ todo }
              toggleComplete={ this.props.toggleComplete }
              deleteTodo={ this.props.deleteTodo }
            />
          ))
        }
      </div>
    )
  }
}

export default TodoList
