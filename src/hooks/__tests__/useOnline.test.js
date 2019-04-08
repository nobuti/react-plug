import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import useOnline from '../useOnline'

const Hookable = () => {
  const online = useOnline()
  return <div>{online ? 'online' : 'offline'}</div>
}

describe('useOnline', () => {
  let component

  it('should provide connection status', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable />)
    })

    expect(component.root.findByType('div').props.children).toEqual('online')

    act(() => {
      window.offline()
    })
    expect(component.root.findByType('div').props.children).toEqual('offline')

    act(() => {
      window.online()
    })

    expect(component.root.findByType('div').props.children).toEqual('online')
  })
})
