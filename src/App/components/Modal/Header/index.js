import React from 'react'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'
import Button from '../../Button'

const ModalHeader = ({ title, closeButton, onClose }) => {
  return (
    <div className="modal__header">
      { closeButton && (
        <Button
          action={onClose}
          icon={<MdClose size={20} />}
        />
      )}
      <h1 className="modal__title">{title}</h1>
    </div>
  )
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  closeButton: PropTypes.bool,
  onClose: PropTypes.func
}

export default ModalHeader
