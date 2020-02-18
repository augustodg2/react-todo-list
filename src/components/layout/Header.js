import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h2><Link to="/">Todo List</Link></h2>
        <nav className="nav-links">
          <Link to="/about">About</Link>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func
}

export default Header
