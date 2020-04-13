import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    toggleComplete: PropTypes.func,
    setHasOverflow: PropTypes.func,
    hasOverflow: PropTypes.bool
  }

  render () {
    const { id, title, completed } = this.props.todo
    console.log(this.props.setHasOverflow)
    return (
      <li className={ `todoItem ${completed ? 'completed' : ''}` }>
        <input
          id={`todo-${id}`}
          type="checkbox"
          checked={completed}
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        <label htmlFor={ `todo-${id}` }>
          { title }
        </label>
        <EditTodo
          todo={this.props.todo}
          editTodo={this.props.editTodo}
          setHasOverflow={this.props.setHasOverflow}
          hasOverflow={this.props.hasOverflow}
        />
        <DeleteTodo
          todoId={id}
          deleteTodo={this.props.deleteTodo}
          setHasOverflow={this.props.setHasOverflow}
          hasOverflow={this.props.hasOverflow}
        />
      </li>
    )
  }
}
