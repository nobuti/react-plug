import { useState, useEffect } from 'react'

export default () => {
  const [online, setState] = useState(navigator.onLine)

  const onChange = e => {
    setState(navigator.onLine)
  }

  useEffect(() => {
    window.addEventListener('online', onChange)
    window.addEventListener('offline', onChange)

    return () => {
      window.removeEventListener('online', onChange)
      window.removeEventListener('offline', onChange)
    }
  })

  return online
}
