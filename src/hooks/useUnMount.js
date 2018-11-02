import { useEffect } from 'react'

export default unmount => {
  useEffect(
    () => () => {
      unmount && unmount()
    },
    []
  )
}
