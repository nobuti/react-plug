import { useState, useCallback, useEffect } from 'react'

export default ({ keys = [] } = {}) => {
  const [key, setKey] = useState(false)

  const onKeyDown = useCallback(e => {
    const { keyCode } = e
    const included = keys.indexOf(keyCode) >= 0
    setKey(included ? keyCode : false)
  })

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.removeEventListener('keydown', onKeyDown)
    }
  })

  return key
}
