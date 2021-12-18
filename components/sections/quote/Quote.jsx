import React from "react"

import { QuoteContainer, Blockquote, ImageContainer } from "./style"
import { Container } from "../../../styles"
import { Image } from "../../ui"
import quoteIcon from "../../../assets/images/icon/left-quotes-sign.svg"

const Quote = () => {
  return (
    <QuoteContainer>
      <Container>
        <Blockquote cite="https://simonsinek.com/">
          The goal is not to do business with everybody who needs what you have.
          <br />
          The goal is to do business with people who believe what you believe.
          <ImageContainer>
            <Image svg={quoteIcon} />
          </ImageContainer>
        </Blockquote>
      </Container>
    </QuoteContainer>
  )
}

export default Quote
