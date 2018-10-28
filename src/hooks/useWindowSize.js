import { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

export default ({ delay = 100 }) => {
  const [size, setState] = useState(null)
  const onChange = debounce(
    useCallback(e => {
      const size = {
        width: window.outerWidth,
        height: window.outerHeight
      }
      setState(size)
    }),
    delay
  )

  useEffect(() => {
    window.addEventListener('resize', onChange)
    onChange()

    return () => {
      window.removeEventListener('resize', onChange)
    }
  })

  return size
}
