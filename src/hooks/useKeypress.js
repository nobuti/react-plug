import { useState, useEffect } from 'react'

export default ({ keys = [] } = {}) => {
  const [key, setKey] = useState(false)

  const onKeyDown = e => {
    const { keyCode } = e
    const included = keys.indexOf(keyCode) >= 0
    setKey(included ? keyCode : false)
  }

  useEffect(
    () => {
      window.addEventListener('keydown', onKeyDown)

      return () => {
        window.removeEventListener('keydown', onKeyDown)
      }
    },
    [keys]
  )

  return key
}
