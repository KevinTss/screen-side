import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
`
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

export const NavItem = styled(({ ...props }) => <Link {...props} />)``
