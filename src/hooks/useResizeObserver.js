import { useEffect, useState, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function({ defaultWidth = 1, defaultHeight = 1 } = {}) {
  const ref = useRef(null)
  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight
  })

  useEffect(() => {
    const element = ref.current
    const resizeObserver = new ResizeObserver(entries => {
      if (!Array.isArray(entries) || !entries.length) {
        return
      }
      const [entry] = entries
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height })
    })

    resizeObserver.observe(element)

    return () => resizeObserver.unobserve(element)
  }, [])

  return { ref, size }
}
