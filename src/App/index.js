import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './pages/Index'
import './styles.scss'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Index} />
        </div>
      </Router>
    )
  }
}

export default App
