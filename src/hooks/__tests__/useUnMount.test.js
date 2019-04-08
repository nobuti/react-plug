import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import useUnMount from '../useUnMount'

const callback = jest.fn()
const Hookable = ({ id }) => {
  useUnMount(callback)
  return <div>{id}</div>
}

describe('useUnMount', () => {
  let component

  it('should trigger callback on unmount', () => {
    act(() => {
      component = TestRenderer.create(<Hookable id="wadus" />)
    })

    expect(callback).toHaveBeenCalledTimes(0)

    act(() => {
      component.unmount()
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
