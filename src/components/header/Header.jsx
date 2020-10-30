import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Content, Nav, NavItem } from "./style"
import { Container } from "../../styles"
import Logo from "../logo"

const HeaderSection = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/logo.jpg" }) {
        childImageSharp {
          fixed(width: 125, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Header>
      <Container>
        <Content>
          <Logo logo={data.logo.childImageSharp} />
          <Nav>
            <NavItem to="/projects">Projects</NavItem>
          </Nav>
        </Content>
      </Container>
    </Header>
  )
}

export default HeaderSection
