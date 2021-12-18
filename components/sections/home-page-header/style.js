import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"
import { Heading, Text } from "../../ui"

export const HomePageHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 100px 0;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    padding: 50px 0;
  }
`

export const MainTitle = styled(Heading)`
  max-width: 630px;
  line-height: 1.15em;
  font-size: 48px;
`

export const MainText = styled(Text)`
  max-width: 600px;
  line-height: 1.65em;
  font-size: 24px;
  margin-bottom: 50px;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    margin-bottom: 20px;
  }
`

export const CTA = styled.a`
  border-radius: 35px;
  background-color: ${COLOR.CLOUD_BURST};
  box-shadow: 0 15px 45px 0 rgba(20, 106, 255, 0.1);
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-align: center;
  padding: 20px 40px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  transition: all 0.2s ease;
`
