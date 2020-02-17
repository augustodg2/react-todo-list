import React, { Component } from 'react';
import './AddTodo.css';

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    render() {
        return (
            <form
                className="addTodoForm"
                onSubmit={ this.onSubmit }
            >
                <input
                    type='text'        
                    name='title' 
                    placeholder='Add Todo ...'
                    className="input"
                    value={ this.state.title }
                    onChange={ this.onChange }
                />

                <button type="submit" className="button">
                    <i className='material-icons'>
                        add
                    </i>
                </button>
                    
            </form>
        )
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.title === '') return null;

        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

}

