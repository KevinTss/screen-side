import { GlobalStyle, Main } from "../../../styles"
import Header from "../../layout/header"
import Footer from "../../layout/footer"
import Head from "../../head"

const DefaultTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <Head />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default DefaultTemplate
