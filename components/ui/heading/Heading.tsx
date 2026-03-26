import React from "react"
import { Heading } from "./style"

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: number
}

const HeadingEl = ({ children, ...props }: Props) => (
  <Heading {...props}>{children}</Heading>
)

export default HeadingEl
