import { useState } from "react"
import { Header, Content, Nav, CVButton } from "./style"
import { Container } from "../../../styles"
import Logo from "../../logo"
import CVModal from "../../cv-modal/CVModal"

const HeaderSection = () => {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <>
      <Header>
        <Container>
          <Content>
            <Logo />
            <Nav>
              <CVButton onClick={() => setCvOpen(true)}>CV</CVButton>
            </Nav>
          </Content>
        </Container>
      </Header>

      {cvOpen && <CVModal onClose={() => setCvOpen(false)} />}
    </>
  )
}

export default HeaderSection
