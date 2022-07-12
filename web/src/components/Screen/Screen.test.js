import { render } from '@redwoodjs/testing/web'

import Screen from './Screen'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Screen', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Screen />)
    }).not.toThrow()
  })
})
