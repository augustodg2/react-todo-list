import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Button from '../index'

afterEach(cleanup)

describe('# Button', () => {
  // Snapshot
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button text="click me" icon="add" />
    )
    const button = getByTestId('button')
    expect(button).toMatchSnapshot()
  })

  // Button text
  it('should render text from props', () => {
    const { getByTestId } = render(
      <Button text="click me" />
    )
    const buttonText = getByTestId('button__text')
    expect(buttonText.textContent).toBe('click me')
  })

  // Button icon
  it('should render icon from props', () => {
    const { getByTestId } = render(
      <Button text="click me" icon="add" />
    )
    const buttonIcon = getByTestId('button__icon')
    expect(buttonIcon.textContent).toBe('add')
  })

  // Button variants
  it('should add variant classnames to button', () => {
    const { getByTestId } = render(
      <Button variant="abc abcd" />
    )
    const button = getByTestId('button')
    expect(button.className).toContain('abc abcd')
  })

  // Action
  it('should execute action on click', () => {
    const action = jest.fn()
    const { getByTestId } = render(
      <Button action={action} />
    )

    const button = getByTestId('button')
    fireEvent.click(button)

    expect(action).toBeCalledTimes(1)
  })
})
