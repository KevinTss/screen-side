import { HomePageHeaderContainer, MainTitle, MainText, CTA } from "./style"
import { Container, Flex } from "../../../styles"

const HomePageHeader = () => (
  <HomePageHeaderContainer>
    <Container>
      <Flex direction="column">
        <MainTitle>Let&apos;s create your awesome application!</MainTitle>
        <MainText>
          Do you have any project who need a website, application or other tech
          automation? Let&apos;s look into it together.
        </MainText>
        <CTA href="#contact-me">Send me a message</CTA>
      </Flex>
    </Container>
  </HomePageHeaderContainer>
)

export default HomePageHeader
