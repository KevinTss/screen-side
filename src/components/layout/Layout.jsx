import React from "react"

import { GlobalStyle, Main } from "../../styles"
import Header from "../header"
import Footer from "../footer"
import Head from "../head"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
