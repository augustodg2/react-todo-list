import React, { Fragment } from 'react'
import ModalControl from 'App/components/ModalControl'
import Button from 'App/components/Button'
import { MdAdd } from 'react-icons/md'
import AddTaskModal from './AddTaskModal'

export const AddTaskControl = () => {
  return (
    <ModalControl
      openWithKey='Enter'
      render={({ isVisible, toggleVisibility }) => (
        <Fragment>
          <div className="add-task">
            <Button
              variant="float primary round"
              icon={<MdAdd size={20} />}
              action={toggleVisibility}
            />
          </div>
          <AddTaskModal
            isVisible={isVisible}
            onClose={toggleVisibility}
          />
        </Fragment>
      )} />
  )
}
