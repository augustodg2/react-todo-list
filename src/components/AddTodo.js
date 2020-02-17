import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    render() {
        return (
            <form
                style={ formStyle }
                onSubmit={ this.onSubmit }
            >
                <input
                    type='text'        
                    name='title' 
                    placeholder='Add Todo ...'
                    style={ inputStyle }
                    value={ this.state.title }
                    onChange={ this.onChange }
                />

                <button type="submit" style={ buttonStyle }>
                    <i className='material-icons' style={{ fontSize: '1rem' }}>
                        add
                    </i>
                </button>
                    
            </form>
        )
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

}

const buttonStyle = {
    flex: 1,
    borderRadius: '2rem',
    border: '1px #666 solid',
    background: '#0f4c81',
    color: 'white',
    maxWidth: '2rem',
    marginLeft: '.5rem',
    display: 'flex',
    justifyContent: 'center',
}

const formStyle = {
    display: 'flex',
}

const inputStyle = {
    flex: 10,
    padding: '.5rem .75rem',
    borderRadius: '1rem',
    border: '1px #ccc solid',
    outline: 'none'
}
