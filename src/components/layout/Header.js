import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h2>Primary</h2>
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func
}

export default Header
