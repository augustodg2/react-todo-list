import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {
    return (
      <button className={this.props.type} onClick={this.props.onClick}>
        <i className='material-icons'> { this.props.icon } </i>
      </button>
    )
  }
}

export default Button
