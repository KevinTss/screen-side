import React from "react"

import { Button } from "./style"

const ButtonEl = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default ButtonEl
