import { render } from '@redwoodjs/testing/web'

import CalcPage from './CalcPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CalcPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalcPage />)
    }).not.toThrow()
  })
})
