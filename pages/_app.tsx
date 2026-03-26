import type { AppProps } from "next/app"
import { GlobalStyle, Main } from "../styles"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Head from "../components/head"

const App = ({ Component, pageProps }: AppProps) => (
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
