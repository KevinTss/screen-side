import { Header, Content, Nav } from "./style"
import { Container } from "../../../styles"
import Logo from "../../logo"
import logoUrl from "../../../assets/images/logo/logo.jpg"

const HeaderSection = () => (
  <Header>
    <Container>
      <Content>
        <Logo logo={logoUrl} />
        {/* <Nav><NavItem to="/projects">Projects</NavItem></Nav> */}
      </Content>
    </Container>
  </Header>
)

export default HeaderSection
