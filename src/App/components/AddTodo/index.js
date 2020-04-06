import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import useKeyPress from '../../utils/useKeyPress'
import AddTodoModal from './AddTodoModal'
import { MdAdd } from 'react-icons/md'

const AddTodo = ({ addTodo }) => {
  const [isVisible, setIsVisible] = useState(false)
  const pressEnter = useKeyPress('Enter')

  const toggleVisibility = () => setIsVisible(!isVisible)

  const openOnPressEnter = () => {
    if (pressEnter && !isVisible) toggleVisibility()
  }

  useEffect(() => {
    openOnPressEnter()
  }, [pressEnter])

  return (
    <div>
      <div className="add-todo">
        <Button variant="float primary round" icon={<MdAdd size={20} />} action={toggleVisibility} />
      </div>

      <AddTodoModal
        isVisible={isVisible}
        onClose={toggleVisibility}
        addTodo={addTodo}
      />
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func
}

export default AddTodo
