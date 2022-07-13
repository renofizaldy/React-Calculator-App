import { render } from '@redwoodjs/testing/web'

import Navlink from './Navlink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Navlink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navlink />)
    }).not.toThrow()
  })
})
