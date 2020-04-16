import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const OverlayContext = createContext()

export const OverlayProvider = ({ children }) => {
  const [hasOverlay, setHasOverlay] = useState(false)

  return (
    <OverlayContext.Provider value={{ hasOverlay, setHasOverlay }}>
      {children}
    </OverlayContext.Provider>
  )
}

OverlayProvider.propTypes = {
  children: PropTypes.node
}
