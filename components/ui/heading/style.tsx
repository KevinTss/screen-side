import React from "react"
import styled from "styled-components"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number
}

export const Heading = styled(({ level = 1, ...props }: HeadingProps) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  return <Tag {...props} />
})`
  font-size: 2rem;
  margin-bottom: 20px;
`
