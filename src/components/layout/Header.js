import React from 'react'
import PropTypes from 'prop-types'
import AddTodo from '../AddTodo'
import './Header.css'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h2>Todo List</h2>
        <small className="small">Developed by Augusto Dias</small>

        <AddTodo addTodo={ this.props.addTodo } />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func
}

export default Header
