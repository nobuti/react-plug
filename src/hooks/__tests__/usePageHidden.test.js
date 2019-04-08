import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act } = TestRenderer

import usePageHidden from '../usePageHidden'

const Hookable = () => {
  const hidden = usePageHidden()
  return <div>{hidden ? 'hidden' : 'visible'}</div>
}

describe('usePageHidden', () => {
  let component

  it('should catch page visibility', async () => {
    act(() => {
      component = TestRenderer.create(<Hookable />)
    })

    const div = component.root.findByType('div')
    expect(div.props.children).toEqual('visible')

    window.hide()
    expect(div.props.children).toEqual('hidden')

    window.show()
    expect(div.props.children).toEqual('visible')
  })
})
