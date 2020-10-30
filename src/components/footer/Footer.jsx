import React from "react"

import { Footer } from "./style"
import { P } from "../ui"

const FooterSection = () => {
  return (
    <Footer>
      <P>&copy; {`${new Date().getFullYear()} ScreenSide`}</P>
    </Footer>
  )
}

export default FooterSection
