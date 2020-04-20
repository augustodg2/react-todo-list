import React from 'react'
import PropTypes from 'prop-types'

let TextField = ({ label, placeholder, value, onChange }, ref) => {
  return (
    <div className="text-field">
      <label>{ label }</label>
      <input
        type="text"
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
        autoComplete="off"
        ref={ ref }
      />
    </div>
  )
}

TextField = React.forwardRef(TextField)

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default TextField
