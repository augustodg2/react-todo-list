import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import Button from 'App/components/Button'
import DeleteTodoModal from './DeleteTodoModal'
import { TaskContext } from 'App/context/TasksContext'
import ModalControl from 'App/components/ModalControl'

const DeleteTaskControl = ({ id }) => {
  const { deleteTask } = useContext(TaskContext)

  return (
    <ModalControl render={({ isVisible, toggleVisibility }) => (
      <Fragment>
        <Button
          variant="round secondary"
          icon={<MdDelete size="1rem" />}
          action={toggleVisibility}
        />
        <DeleteTodoModal
          todoId={id}
          isVisible={isVisible}
          onClose={toggleVisibility}
          onSubmit={deleteTask}
        />
      </Fragment>
    )} />
  )
}

DeleteTaskControl.propTypes = {
  id: PropTypes.number
}

export default DeleteTaskControl
