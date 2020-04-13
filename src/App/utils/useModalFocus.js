import { useRef, useEffect } from 'react'

export default function useModalFocus (isVisible) {
  const titleInput = useRef(null)

  useEffect(() => {
    titleInput.current !== null && titleInput.current.focus()
    // ugly implementation for waiting for animation
    if (isVisible) { setTimeout(() => { titleInput.current !== null && titleInput.current.focus() }, 250) }
  }, [isVisible])

  return titleInput
}
