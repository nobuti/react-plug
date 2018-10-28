import { useState, useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'

export default () => {
  const [size, setState] = useState(null)
  const onChange = debounce(
    useCallback(e => {
      const size = {
        width: window.outerWidth,
        height: window.outerHeight
      }
      setState(size)
    }),
    100
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
