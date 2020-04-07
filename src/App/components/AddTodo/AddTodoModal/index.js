import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import TextField from '../../TextField'

const AddTodoModal = ({ addTodo, onClose: onCloseProp, isVisible }) => {
  const [title, setTitle] = useState('')
  const titleInput = useRef(null)

  useEffect(() => {
    titleInput.current !== null && titleInput.current.focus()
    // ugly implementation for waiting for animation
    if (isVisible) { setTimeout(() => { titleInput.current !== null && titleInput.current.focus() }, 250) }
  }, [isVisible])

  const onChange = (e) => setTitle(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    if (title === '') return null

    addTodo({ title })
    setTitle('')
    onClose()
  }

  const onClose = () => setTitle('') || onCloseProp()

  return (
    <Modal
      variant="bottom"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
      title="New Task..."
      closeButton
      actions={[
        { id: 0, type: 'primary', title: 'Create' },
        { id: 1, type: 'secondary', title: 'Cancel', action: onClose }
      ]}
    >
      <TextField
        label="Task title"
        value={title}
        onChange={onChange}
        ref={titleInput}
        autofocus
      />
    </Modal>
  )
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddTodoModal
