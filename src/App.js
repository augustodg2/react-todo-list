import React, {Component} from 'react';
import './App.css';
import uuid from 'uuid';

import Todos from './components/Todos';
import Header from './components/layout/Header';

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Beijar Bertha',
                completed: false
            },
        ]
    }
    
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                
                return todo;
            })
        });
    }

    deleteTodo = (id) => {
        this.setState({
            todos: [ ...this.state.todos.filter(
                todo => todo.id !== id
            )]
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }

        this.setState({
            todos: [ ...this.state.todos, newTodo ] 
        });
    }

    render () {
        return (
            <div className="App">
                <Header
                    addTodo={ this.addTodo }
                />
                <Todos
                    todos={ this.state.todos }
                    toggleComplete={ this.toggleComplete }
                    deleteTodo={ this.deleteTodo }
                />
            </div>
        );    
    }
}

export default App;
