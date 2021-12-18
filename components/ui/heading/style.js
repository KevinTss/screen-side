import React from "react"
import styled from "styled-components"

export const Heading = styled(({ level, ...props }) => {
  const El = `h${level}`

  return <El {...props} />
})`
  font-size: 2rem;
  margin-bottom: 20px;
`
