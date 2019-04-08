import { useState, useEffect } from 'react'

const getHiddenProps = () => {
  const hidden = {
    hidden: null,
    event: 'visibilitychange'
  }

  const prefixes = ['webkit', 'moz', 'ms', 'o']

  // if 'hidden' is natively supported just return it
  if ('hidden' in document) {
    return {
      hidden: 'hidden',
      event: 'visibilitychange'
    }
  }

  return prefixes.reduce((memo, prefix) => {
    const prop = `${prefix}Hidden`
    const event = `${prefix}visibilitychange`
    if (prop in document) {
      memo = { hidden: prop, event }
    }
    return memo
  }, hidden)
}

export default () => {
  const { hidden, event } = getHiddenProps()

  const isWindowHidden = () => {
    if (!hidden) return false
    return document[hidden]
  }

  const [isHidden, setState] = useState(isWindowHidden())

  const onChange = e => {
    setState(isWindowHidden())
  }

  useEffect(() => {
    document.addEventListener(event, onChange, false)

    return () => {
      document.removeEventListener(event, onChange, false)
    }
  }, [])

  return isHidden
}
