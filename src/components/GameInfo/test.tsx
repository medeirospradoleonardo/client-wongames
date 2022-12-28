import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'Game Description',
  price: 210
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    // esperar por um title
    // esperar por description
    // esperar pelo price
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    // esperar button add to cart
    // esperar button wishlist
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
