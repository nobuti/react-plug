import React from 'react'
import TestRenderer from 'react-test-renderer'

import useWindowSize from '../useWindowSize'

const { act } = TestRenderer

const Hookable = () => {
  const size = useWindowSize()
  return <div>{size.width}</div>
}

// Tell jest to mock this import
jest.mock('../../utils/throttle', () => fn => fn)

describe('useWindowSize', () => {
  let component

  it('should provide the window size', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable />)
    })

    const div = component.root.findByType('div')

    act(() => {
      window.resizeTo(600, 300)
    })

    expect(div.props.children).toEqual(600)

    act(() => {
      window.resizeTo(800, 500)
    })

    expect(div.props.children).toEqual(800)
  })
})
