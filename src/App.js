import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './components/pages/Index'
import About from './components/pages/About'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Index} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
