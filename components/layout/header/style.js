import styled from "styled-components"
import { COLOR } from "../../../utils/constants"

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: 30px 30px 80px 0px ${COLOR.CLOUD_BURST}55;
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

export const CVButton = styled.button`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: ${COLOR.CLOUD_BURST};
  background: transparent;
  border: 2px solid ${COLOR.CLOUD_BURST};
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${COLOR.CLOUD_BURST};
    color: white;
  }
`
