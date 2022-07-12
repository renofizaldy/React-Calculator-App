import { render } from '@redwoodjs/testing/web'

import Word from './Word'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Word', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Word />)
    }).not.toThrow()
  })
})
