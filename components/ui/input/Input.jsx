import React from "react"

import { Input, Textarea } from "./style"

const InputEl = ({ type, hasError, ...props }) => {
  if (type === "textarea") {
    return <Textarea $hasError={hasError} {...props}></Textarea>
  }

  return <Input type={type} $hasError={hasError} {...props} />
}

export default InputEl
