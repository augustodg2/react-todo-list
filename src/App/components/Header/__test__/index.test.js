import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from '../index'

afterEach(cleanup)

describe('# Header', () => {
  it('should match the snapshot', () => {
    const { container } = render(
      <Header />
    )
    expect(container).toMatchSnapshot()
  })
})
