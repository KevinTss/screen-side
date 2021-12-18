import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${COLOR.MYSTIC};
  color: ${COLOR.CLOUD_BURST};
  font-size: 1rem;
  border-radius: 25px;
  padding: 10px 15px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:focus {
    border: 2px solid ${COLOR.CLOUD_BURST};
    outline: none;
  }
`
