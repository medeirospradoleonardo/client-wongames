import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'

import * as S from './styles'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import ShowCase from 'components/ShowCase'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <ShowCase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <ShowCase
      title="Upcomming"
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <ShowCase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
