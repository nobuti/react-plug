import { useEffect, useRef, useState } from 'react'

let hasPassiveSupport
const getHasPassiveEventSupport = () => {
  if (typeof hasPassiveSupport === 'boolean') {
    return hasPassiveSupport
  }

  hasPassiveSupport = false

  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        hasPassiveSupport = true
        return hasPassiveSupport
      }
    })

    window.addEventListener('testPassiveEvents', null, opts)
  } catch (e) {}
  return hasPassiveSupport
}

export default () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 })
  const tickingRef = useRef()

  const handleScroll = () => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset
    })
    tickingRef.current = false
  }

  const onScroll = () => {
    if (tickingRef.current) {
      return
    }

    tickingRef.current = true
    window.requestAnimationFrame(handleScroll)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, getHasPassiveEventSupport() ? { passive: true } : false)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return scroll
}
