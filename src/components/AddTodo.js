import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import TextField from './TextField'
import Button from './Button'

const AddTodo = (props) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')

  const titleInput = useRef(null)

  useEffect(() => {
    setTimeout(() => { titleInput.current !== null && titleInput.current.focus() }, 250)
  }, [open])

  const toggleOpen = () => setOpen(!open) || setTitle('')

  const onChange = (e) => setTitle(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()

    if (title === '') return null

    props.addTodo({ title })
    setTitle('')
    toggleOpen()
  }

  return (
    <>
      <div className="add-todo">
        <Button variant="primary round" icon="add" action={toggleOpen} />
      </div>
      <Modal
        title="New Task..."
        variant="bottom"
        show={open}
        onClose={toggleOpen}
        onSubmit={onSubmit}
        actions={<>
          <Button variant="primary" text="Create" />
          <Button variant="secondary" text="Cancel" action={toggleOpen} />
        </>}
      >
        <TextField
          id="task-title"
          label="Task title"
          value={title}
          onChange={onChange}
          ref={titleInput}
          autofocus
        />
      </Modal>
    </>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func
}

export default AddTodo

// static propTypes = {
//   addTodo: PropTypes.func
// }

// state = {
//   title: '',
//   open: false
// }
