import React from "react"

import { Header, Content, Nav, NavItem } from "./style"
import { Container } from "../../styles"
import Logo from "../logo"

const HeaderSection = () => {
  return (
    <Header>
      <Container>
        <Content>
          <Logo />
          <Nav>
            <NavItem to="/projects">Projects</NavItem>
          </Nav>
        </Content>
      </Container>
    </Header>
  )
}

export default HeaderSection
