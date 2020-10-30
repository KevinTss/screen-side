import React from "react"

import { Footer } from "./style"
import { P } from "../ui"
import { Container } from "../../styles"

const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <P>&copy; {`${new Date().getFullYear()} ScreenSide`}</P>
      </Container>
    </Footer>
  )
}

export default FooterSection
