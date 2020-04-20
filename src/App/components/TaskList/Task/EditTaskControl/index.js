import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { MdEdit } from 'react-icons/md'
import Button from 'App/components/Button'
import EditTodoModal from './EditTodoModal'
import ModalControl from 'App/components/ModalControl'

const EditTaskControl = ({ task }) => {
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
          handleClose={toggleVisibility}
        />
      </Fragment>
    )} />
  )
}

EditTaskControl.propTypes = {
  task: PropTypes.object
}

export default EditTaskControl
