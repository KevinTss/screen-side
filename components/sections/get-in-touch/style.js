import React from "react"
import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"
import { Text } from "../../ui"

export const GetInTouchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 25px;
  padding: 50px;
  max-width: 50%;
  margin: 100px auto;
  box-shadow: 0px 0px 80px 0px ${COLOR.CLOUD_BURST}55;
  background-color: white;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    max-width: 80%;
  }
  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    margin: 50px auto;
    max-width: 100%;
    padding: 20px;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  position: relative;

  > label {
    margin-bottom: 5px;
  }
`

export const ErrorMessage = styled(Text)`
  color: ${COLOR.CARNATION};
  font-size: 14px;
`

export const AlertContainer = styled(({ isVisible, type, ...props }) => (
  <div {...props} />
))`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${({ type }) =>
    type === "danger" ? `${COLOR.CARNATION}22` : `${COLOR.SHAMROCK}22`};
  border-radius: 20px;
  transition: all 0.3s ease;

  ${({ isVisible, type }) => {
    if (isVisible) {
      const clr = type === "danger" ? COLOR.CARNATION : COLOR.SHAMROCK

      return `
        height: auto;
        padding: 30px 20px 20px 20px;
        border: 2px solid ${clr}AA;
        visibility: visible;
        margin-bottom: 20px;
        `
    }

    return `
      height: 0;
      padding: 0;
      border: 0;
      visibility: hidden;
    `
  }}

  > p {
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
    color: ${({ type }) =>
      type === "danger" ? COLOR.CARNATION : COLOR.SHAMROCK};

    > span {
      font-size: 2rem;
      line-height: 150%;
    }

    a {
      color: ${({ type }) =>
        type === "danger" ? COLOR.CARNATION : COLOR.SHAMROCK};
      text-decoration: underline;
    }
  }
`

export const AlertCloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  cursor: pointer;
`
