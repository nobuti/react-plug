import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer
import debounce from 'lodash.debounce'

import useWindowSize from '../useWindowSize'

const Hookable = () => {
  const size = useWindowSize()
  return <div>{size.width}</div>
}

// Tell jest to mock this import
jest.mock('lodash.debounce')
debounce.mockImplementation(fn => fn)

describe('useWindowSize', () => {
  let component

  it('should provide the window size', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable />)
    })

    const div = component.root.findByType('div')

    window.resizeTo(600, 300)
    expect(div.props.children).toEqual(600)

    window.resizeTo(800, 500)
    expect(div.props.children).toEqual(800)
  })
})
