import { useEffect } from 'react'
import useKeyPress from './useKeyPress'

export default function onPress (key, action) {
  const keyPress = useKeyPress(key)

  useEffect(() => {
    if (keyPress) {
      action()
    }
  }, [keyPress])
}
