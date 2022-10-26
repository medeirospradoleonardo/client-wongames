import { render, screen } from '@testing-library/react'

import ShowCase from '.'

describe('<ShowCase />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShowCase />)

    expect(screen.getByRole('heading', { name: /ShowCase/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
