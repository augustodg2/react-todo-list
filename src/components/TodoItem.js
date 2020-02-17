import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    state = {
        showDeleteButton: false,
        hoverDeleteButton: false,
    }
    
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? '#ccc' : 'black',
            cursor: 'pointer',
            padding: '1rem',
            paddingLeft: '1.5rem',
            display: 'flex',
            flex: 4
        }
    }
    
    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={ this.containerStyle() }
                 onMouseEnter={ this.toggleDeleteButton.bind(this, id) }
                 onMouseLeave={ this.toggleDeleteButton.bind(this, id) }
                 >
                <div style={ this.getStyle() }
                    onClick={ this.props.toggleComplete.bind(this, id) }
                    >
                    <p>
                        <input type="checkbox"
                            style={{ marginRight: '.75rem' }}
                            readOnly={ true }
                            checked={ completed }
                            />
                        { title }
                    </p>
                </div>
                <div style={ this.buttonStyle() }
                    onMouseEnter={ this.toggleHoverDelete }
                    onMouseLeave={ this.toggleHoverDelete }
                    onClick={ this.props.deleteTodo.bind(this, id) }
                >
                    <i className="material-icons">delete_outline</i>
                </div>
            </div>
        )
    }

    
    toggleDeleteButton = () => {
        this.setState({ 
            showDeleteButton: !this.state.showDeleteButton
            // showDeleteButton: true
        });
    }

    toggleHoverDelete = () => {
        this.setState({ hoverDeleteButton: !this.state.hoverDeleteButton });
    }
    
    buttonStyle = () => {
        return {
            background: this.state.hoverDeleteButton ? '#fafafa' : 'none',
            border: 'none',
            color: this.state.hoverDeleteButton ? '#999' : '#ccc',
            display: this.state.showDeleteButton ? 'flex' : 'none',
            cursor: 'pointer',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    } 

    containerStyle = () => {
        return {
            display: 'flex',
            width: '100vw',
            borderBottom: '1px #eee solid',
            background: this.props.todo.completed ? '#fafafa' : '#fff',
            alignItems: 'stretch',
        }
    }
}



// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}