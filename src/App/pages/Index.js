import React from 'react'
import { TaskProvider } from 'App/context/TasksContext'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import AddTask from '../components/AddTask'
import { OverlayProvider } from 'App/context/OverlayContext'

const Index = () => {
  return (
    <div className='wrapper'>
      <OverlayProvider>
        <TaskProvider>
          <Header />
          <TaskList />
          <AddTask />
        </TaskProvider>
      </OverlayProvider>
    </div>
  )
}

export default Index
