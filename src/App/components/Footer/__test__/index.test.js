import React from 'react'
import { render, cleanup } from '@testing-library/react'
import AddTodo from '../index'

afterEach(cleanup)

describe('# AddTodo', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <AddTodo />
    )
    const addTodo = getByTestId('addTodo')
    expect(addTodo).toMatchSnapshot()
  })
})
