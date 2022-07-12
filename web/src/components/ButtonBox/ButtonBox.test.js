import { render } from '@redwoodjs/testing/web'

import ButtonBox from './ButtonBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonBox />)
    }).not.toThrow()
  })
})
