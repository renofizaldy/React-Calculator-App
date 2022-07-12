import { render } from '@redwoodjs/testing/web'

import Copyright from './Copyright'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Copyright', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Copyright />)
    }).not.toThrow()
  })
})
