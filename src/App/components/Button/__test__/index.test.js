import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Button from '../index'

afterEach(cleanup)

describe('# Button', () => {
  it('should render text from props', () => {
    const { getByTestId } = render(<Button text="click me" />)
    const buttonText = getByTestId('button__text')

    expect(buttonText.textContent).toBe('click me')
  })

  it('should render icon from props', () => {
    const Icon = jest.fn(() => <p>icon</p>)
    render(<Button text="click me" icon={<Icon />} />)

    expect(Icon).toHaveBeenCalled()
  })

  it('should add variant classnames to button', () => {
    const { getByTestId } = render(<Button variant="abc abcd" />)
    const button = getByTestId('button')

    expect(button.className).toContain('abc abcd')
  })

  it('should execute action on click', () => {
    const action = jest.fn()
    const { getByTestId } = render(<Button action={action} />)
    const button = getByTestId('button')

    fireEvent.click(button)

    expect(action).toBeCalledTimes(1)
  })
})
