import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddTodo from './AddTodo'

export default class Footer extends Component {
  render () {
    return (
      <>
        <AddTodo addTodo={this.props.addTodo} />
        {/* <footer className="list__footer">

        </footer> */}
      </>
    )
  }
}

Footer.propTypes = {
  addTodo: PropTypes.func
}
