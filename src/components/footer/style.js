import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: ${COLOR.CLOUD_BURST};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  p {
    color: white;
    font-size: 0.75rem;
  }
`
