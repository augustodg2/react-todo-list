import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import Button from '../../Button'
import TextField from '../../TextField'
import ModalFooter from '../../Modal/Footer'
import ModalHeader from '../../Modal/Header'

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

  const modalHeader = (
    <ModalHeader title="New Task..." closeButton onClose={onClose} />
  )

  const modalFooter = (
    <ModalFooter>
      <div className="modal__buttons">
        <Button variant="primary" text="Create" />
        <Button variant="secondary" text="Cancel" action={onClose} />
      </div>
    </ModalFooter>
  )

  return (
    <Modal
      variant="bottom"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
      header={modalHeader}
      footer={modalFooter}
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
  )
}

AddTodoModal.propTypes = {
  addTodo: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool
}

export default AddTodoModal

/*
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
*/
