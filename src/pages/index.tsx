import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
query getGames {
  games {
    name
  }
}
`

export default function Index(props: HomeTemplateProps) {

  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

// ATENCAO
// Os metodos getStaticProps/getServerSideProps so funcionam em pages

// getStaticProps => gerar estatico em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export async function getServerSideProps() {
  // faz a logica
  // pode ser buscar dados numa API
  // fazer calculos/leitura de context

  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: GET_GAMES })

  // retorno dos dados
  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesMock,
      freeHighlight: highlightMock,
      freeGames: gamesMock
    }
  }
}

