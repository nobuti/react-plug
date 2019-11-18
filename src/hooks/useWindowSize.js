import { useState, useEffect } from 'react'
import throttle from '../utils/throttle'

export default ({ delay = 100 } = {}) => {
  const [size, setState] = useState({
    width: window.outerWidth,
    height: window.outerHeight
  })

  const onChange = throttle(e => {
    const size = {
      width: e.target.outerWidth,
      height: e.target.outerHeight
    }

    setState(size)
  }, delay)

  useEffect(
    () => {
      window.addEventListener('resize', onChange)

      return () => {
        window.removeEventListener('resize', onChange)
      }
    },
    [delay]
  )

  return size
}
