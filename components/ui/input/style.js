import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const Input = styled.input`
  border: 2px solid
    ${({ $hasError }) => ($hasError ? COLOR.CARNATION : COLOR.MYSTIC)};
  border-radius: 25px;
  padding: 10px 15px;

  &:focus {
    outline: none;
    border: 2px solid ${COLOR.CLOUD_BURST};
  }

  ::placeholder {
    color: ${COLOR.CLOUD_BURST}55;
  }
`

export const Textarea = styled.textarea`
  border: 2px solid
    ${({ $hasError }) => ($hasError ? COLOR.CARNATION : COLOR.MYSTIC)};
  border-radius: 20px;
  resize: none;
  padding: 10px 15px;
  min-height: 100px;

  &:focus {
    outline: none;
    border: 2px solid ${COLOR.CLOUD_BURST};
  }

  ::placeholder {
    color: ${COLOR.CLOUD_BURST}55;
  }
`
