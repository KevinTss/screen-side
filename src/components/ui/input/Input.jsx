import React from "react"

import { Input, Textarea } from "./style"

const InputEl = ({ type, ...props }) => {
  if (type === "textarea") {
    return <Textarea {...props}></Textarea>
  }

  return <Input type={type} {...props} />
}

export default InputEl
