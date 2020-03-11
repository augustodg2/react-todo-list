import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func,
    toggleComplete: PropTypes.func
  }

  render () {
    const { id, title, completed } = this.props.todo

    return (
      <div className={ `todoItem ${completed ? 'completed' : ''}` }>
        <input
          id={ `${id}completed` }
          type="checkbox"
          checked={ completed }
          onChange={ this.props.toggleComplete.bind(this, id) }
        />
        <label htmlFor={ `${id}completed` }>
          { title }
        </label>
        <div
          className="deleteButton"
          onClick={ this.props.deleteTodo.bind(this, id) }
        >
          <i className="material-icons">delete_outline</i>
        </div>
      </div>

    )
  }
}
