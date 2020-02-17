import React from 'react'
import AddTodo from '../AddTodo'

class Header extends React.Component {
    render() {
        return (
            <header style={ headerStyle }>
                <h2>Todo List</h2>
                <small style={ smallStyle }>Developed by Augusto Dias</small>
    
                <AddTodo addTodo={ this.props.addTodo } />
            </header>
        )
    }
}

const headerStyle = {
    padding: '2rem 1.5rem 1.5rem 1.5rem',
    boxShadow: '0px 1px 5px #ccc',
    position: 'relative',
    zIndex: 2,
    color: '#444'
}

const smallStyle = {
    fontFamily: 'Helvetica Neue',
    color: '#aaa',
    display: 'inline-block',
    paddingBottom: '1.25rem'
}

export default Header;