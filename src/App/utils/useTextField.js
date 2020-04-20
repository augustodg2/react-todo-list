import React, { useState } from 'react'
import TextField from 'App/components/TextField'

export default function useTextField ({ label, ref, defaultValue }) {
  const [value, setValue] = useState(defaultValue || '')
  const onChange = (e) => setValue(e.target.value)

  const field = (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  )

  return [value, setValue, field]
}
