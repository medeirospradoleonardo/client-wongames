import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

import * as S from './styles'
import PaymentForm from 'components/PaymentForm'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const Cart = ({ recommendedGames, recommendedHighlight }: CartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />

          <PaymentForm />
        </S.Content>
        <Divider />
      </Container>

      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
