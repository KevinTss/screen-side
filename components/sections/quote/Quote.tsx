import { QuoteContainer, Blockquote, ImageContainer } from "./style"
import { Container } from "../../../styles"
import quoteIcon from "../../../assets/images/icon/left-quotes-sign.svg"

const Quote = () => (
  <QuoteContainer>
    <Container>
      <Blockquote cite="https://simonsinek.com/">
        The goal is not to do business with everybody who needs what you have.
        <br />
        The goal is to do business with people who believe what you believe.
        <ImageContainer>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              typeof quoteIcon === "object"
                ? (quoteIcon as { src: string }).src
                : quoteIcon
            }
            alt="quote"
            style={{ width: "100%", height: "100%" }}
          />
        </ImageContainer>
      </Blockquote>
    </Container>
  </QuoteContainer>
)

export default Quote
