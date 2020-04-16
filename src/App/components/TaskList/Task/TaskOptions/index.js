import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'App/components/Button'
import { MdMoreVert, MdArrowBack } from 'react-icons/md'

const TaskOptions = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <Button action={toggleOpen} icon={
        isOpen
          ? <MdArrowBack size="1rem" />
          : <MdMoreVert size="1.25rem" />
      } />
      <div className={`task__options ${!isOpen && 'hidden'}`}>
        { children }
      </div>
    </Fragment>
  )
}

TaskOptions.propTypes = {
  children: PropTypes.node
}

export default TaskOptions
