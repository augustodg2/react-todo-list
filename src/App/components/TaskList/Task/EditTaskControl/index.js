import React, { useContext, Fragment } from 'react'
import PropTypes from 'prop-types'
import { MdEdit } from 'react-icons/md'
import Button from 'App/components/Button'
import EditTodoModal from './EditTodoModal'
import { TaskContext } from 'App/context/TasksContext'
import ModalControl from 'App/components/ModalControl'

const EditTaskControl = ({ task }) => {
  const { editTask } = useContext(TaskContext)

  if (task.completed) return null

  return (
    <ModalControl render={({ isVisible, toggleVisibility }) => (
      <Fragment>
        <Button
          variant="round secondary"
          icon={<MdEdit size="1rem" />}
          action={toggleVisibility}
        />
        <EditTodoModal
          task={task}
          isVisible={isVisible}
          onClose={toggleVisibility}
          onSubmit={editTask}
        />
      </Fragment>
    )} />
  )
}

EditTaskControl.propTypes = {
  task: PropTypes.object,
  editTodo: PropTypes.func,
  setHasOverflow: PropTypes.func,
  hasOverflow: PropTypes.bool
}

export default EditTaskControl
