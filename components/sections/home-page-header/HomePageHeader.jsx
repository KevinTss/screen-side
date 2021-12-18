import Link from "next/link"

import { HomePageHeaderContainer, MainTitle, MainText, CTA } from "./style"
import { Container, Flex } from "../../../styles"

const HomePageHeader = () => (
  <HomePageHeaderContainer>
    <Container>
      <Flex direction="column">
        <MainTitle>Let's create your awesome application!</MainTitle>
        <MainText>
          Do you have any project who need a website, application or other tech
          automation? Let's look into it together.
        </MainText>
        <Link href="#contact-me">
          <CTA>Send me a message</CTA>
        </Link>
      </Flex>
    </Container>
  </HomePageHeaderContainer>
)

export default HomePageHeader
