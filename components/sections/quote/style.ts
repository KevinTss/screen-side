import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Blockquote = styled.blockquote`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  line-height: 145%;
  position: relative;
  max-width: 600px;
  margin: 150px 0 0 0;
  text-align: left;
  color: ${COLOR.CLOUD_BURST};
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 200px;
  top: -30%;
  right: -10%;
  z-index: -1;

  > img {
    width: 100%;
    opacity: 0.5;
  }
`
