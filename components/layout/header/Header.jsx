import { Header, Content, Nav } from "./style"
import { Container } from "../../../styles"
import Logo from "../../logo"

const HeaderSection = () => (
  <Header>
    <Container>
      <Content>
        <Logo />
        {/* <Nav><NavItem to="/projects">Projects</NavItem></Nav> */}
      </Content>
    </Container>
  </Header>
)

export default HeaderSection
