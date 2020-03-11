import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class AddTodo extends Component {
  state = {
    title: ''
  }

  render () {
    return (
      <div className="add-todo">
        <div className="footer"></div>
        <Button
          type="round primary"
          icon="add"
          onClick={this.onClick}
        />
      </div>
    )
  }

  onClick = () => {
    this.setState({ open: true })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.title === '') return null

    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func
}

export default AddTodo
