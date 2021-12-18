import styled from "styled-components"

export { GlobalStyle } from "./GlobalStyle"

export const Container = styled.div`
  max-width: 1096px;
  width: 100%;
  margin: 0 20px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  justify-content: flex-start;
  align-items: flex-start;
`
