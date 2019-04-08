import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import useScrollPosition from '../useScrollPosition'

const Hookable = () => {
  const scroll = useScrollPosition()
  return <div>{scroll.y}</div>
}

describe('useScrollPosition', () => {
  let component

  it('should catch scroll', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable />)
    })

    const div = component.root.findByType('div')
    expect(div.props.children).toEqual(0)

    window.scrollTo(0, 300)
    expect(div.props.children).toEqual(300)

    window.scrollTo(0, 0)
    expect(div.props.children).toEqual(0)
  })
})
