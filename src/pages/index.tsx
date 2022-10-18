import Home from 'templates/Home'

export default function Index(props: any) {
  return <Home {...props} />
}

// ATENCAO
// Os metodos getStaticProps/getServerSideProps so funcionam em pages

// getStaticProps => gerar estatico em build time
// getServerSideProps => gerar via ssr a cada request
// getInitialProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz a logica
  // pode ser buscar dados numa API
  // fazer calculos/leitura de context

  return {
    props: {
      heading: 'Olha eu aqui'
    }
  }
}

