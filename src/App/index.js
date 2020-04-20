import React, { Component } from 'react'
import './styles.scss'
import { OverlayProvider } from './context/OverlayContext'
import { TaskProvider } from './context/TasksContext'
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <div className="app">
        <TaskProvider>
          <OverlayProvider>
            <Header />
            <TaskList />
            <Footer />
          </OverlayProvider>
        </TaskProvider>
      </div>
    )
  }
}

export default App
