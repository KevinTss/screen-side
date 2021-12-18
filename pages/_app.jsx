// https://nextjs.org/docs/advanced-features/custom-app
import { GlobalStyle, Main } from "../styles"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Head from "../components/head"

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Head />
    <Header />
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer />
  </>
)

export default App
