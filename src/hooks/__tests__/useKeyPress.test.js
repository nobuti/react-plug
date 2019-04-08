import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import useKeypress from '../useKeypress'

const Hookable = ({ keys }) => {
  const key = useKeypress({ keys })
  return <div>{key ? key : 'nothing pressed'}</div>
}

describe('useKeypress', () => {
  let component

  it('should catch key press if matches', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable keys={[13]} />)
    })

    const div = component.root.findByType('div')
    expect(div.props.children).toEqual('nothing pressed')

    window.keyPress(27)
    expect(div.props.children).toEqual('nothing pressed')

    window.keyPress(13)
    expect(div.props.children).toEqual(13)
  })

  it('should update keys to match', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable keys={[13]} />)
    })

    const div = component.root.findByType('div')

    window.keyPress(27)
    expect(div.props.children).toEqual('nothing pressed')

    act(() => {
      component.update(<Hookable keys={[13, 27]} />)
    })

    window.keyPress(27)
    expect(div.props.children).toEqual(27)
  })
})
