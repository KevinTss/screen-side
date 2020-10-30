import React from "react"

import { P } from "./style"

const PEl = ({ children, ...props }) => {
  return <P {...props}>{children}</P>
}

export default PEl
