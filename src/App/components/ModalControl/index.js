import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { OverlayContext } from 'App/context/OverlayContext'
import onPress from 'App/utils/onPress'

const ModalControl = ({ render, openWithKey }) => {
  const [isVisible, setIsVisible] = useState(false)
  const { hasOverlay, setHasOverlay } = useContext(OverlayContext)

  const toggleVisibility = () => setIsVisible(!hasOverlay)
  useEffect(() => { setHasOverlay(isVisible) }, [isVisible])

  if (openWithKey) {
    onPress(openWithKey, () => !isVisible && toggleVisibility())
  }

  return (
    <div>
      {render({ isVisible, toggleVisibility })}
    </div>
  )
}

ModalControl.propTypes = {
  render: PropTypes.func,
  openWithKey: PropTypes.string
}

export default ModalControl
