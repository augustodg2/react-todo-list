import React, { useState, useEffect, useContext } from 'react'
import { MdAdd } from 'react-icons/md'
import Button from '../Button'
import useKeyPress from '../../utils/useKeyPress'
import AddTaskModal from './AddTaskModal'
import { OverlayContext } from 'App/context/OverlayContext'

const AddTask = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { hasOverlay, setHasOverlay } = useContext(OverlayContext)
  const { addTask } = useContext
  const pressEnter = useKeyPress('Enter')

  const toggleVisibility = () => setIsVisible(!hasOverlay)
  useEffect(() => setHasOverlay(isVisible), [isVisible])

  useEffect(() => {
    if (pressEnter && !hasOverlay) toggleVisibility()
  }, [pressEnter])

  return (
    <>
      <div className="add-todo">
        <Button variant="float primary round" icon={<MdAdd size={20} />} action={toggleVisibility} />
      </div>

      <AddTaskModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        onSubmit={addTask}
      />
    </>
  )
}

export default AddTask
