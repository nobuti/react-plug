import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import useMount from '../useMount'

const callback = jest.fn()
const Hookable = ({ id }) => {
  useMount(callback)
  return <div>{id}</div>
}

describe('useMount', () => {
  it('should trigger callback on mount', () => {
    let component
    act(() => {
      component = TestRenderer.create(<Hookable id="wadus" />)
    })

    expect(callback).toHaveBeenCalledTimes(1)

    act(() => {
      component.update(<Hookable id="waduss" />)
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
