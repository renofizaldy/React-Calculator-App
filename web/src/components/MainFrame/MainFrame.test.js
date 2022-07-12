import { render } from '@redwoodjs/testing/web'

import MainFrame from './MainFrame'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainFrame', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainFrame />)
    }).not.toThrow()
  })
})
