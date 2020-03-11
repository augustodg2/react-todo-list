import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func
  }

  state = {
    title: '',
    open: false
  }

  render () {
    const closedForm = <>
      <div className="footer"></div>
      <Button
        type="round primary"
        icon="add"
        onClick={this.toggleOpen}
      />
    </>

    const addTodoForm = <form>
      <h2>AddTodo Form Opened</h2>
      <button onClick={this.toggleOpen}>x</button>
    </form>

    return (
      <div className="add-todo">
        { this.state.open
          ? addTodoForm
          : closedForm
        }
      </div>
    )
  }

  toggleOpen = () => {
    console.log('click')
    this.setState({ open: !this.state.open })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.title === '') return null

    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
}

export default AddTodo
