import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const Footer = styled.footer`
  display: flex;
  padding: 10px 20px;
  background-color: ${COLOR.CLOUD_BURST};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  > p {
    color: white;
    font-size: 0.75rem;
  }
`
