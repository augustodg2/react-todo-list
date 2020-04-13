import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    toggleComplete: PropTypes.func,
    setHasOverflow: PropTypes.func,
    hasOverflow: PropTypes.bool
  }

  render () {
    return (
      <ul className='todo-list'>
        {
          this.props.todos.map((todo) => (
            <TodoItem key={ todo.id }
              todo={ todo }
              toggleComplete={ this.props.toggleComplete }
              deleteTodo={ this.props.deleteTodo }
              editTodo={ this.props.editTodo }
              setHasOverflow={this.props.setHasOverflow}
              hasOverflow={this.props.hasOverflow}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList
