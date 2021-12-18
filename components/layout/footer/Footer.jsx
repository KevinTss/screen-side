import { Footer } from "./style"
import { Text } from "../../ui"
import { Container } from "../../../styles"

const FooterSection = () => (
  <Footer>
    <Container>
      <Text>&copy; {`${new Date().getFullYear()} ScreenSide`}</Text>
    </Container>
  </Footer>
)

export default FooterSection
