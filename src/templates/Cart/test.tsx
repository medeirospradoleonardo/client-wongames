import { render, screen } from '@testing-library/react'

import Cart from '.'

describe('<Cart />', () => {
  it('should render the heading', () => {
    const { container } = render(<Cart />)

    expect(screen.getByRole('heading', { name: /Cart/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
