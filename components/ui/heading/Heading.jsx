import React from "react"

import { Heading } from "./style"

const HeadingEl = ({ children, ...props }) => {
  return <Heading {...props}>{children}</Heading>
}

HeadingEl.defaultProps = {
  level: 1,
}

export default HeadingEl
