import styled from "styled-components"
import Link from "next/link"

import { COLOR } from "../../../utils/constants"

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 30px 30px 80px 0px ${COLOR.CLOUD_BURST}55;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: white;
  z-index: 2;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

export const NavItem = styled(({ ...props }) => <Link {...props} />)``
