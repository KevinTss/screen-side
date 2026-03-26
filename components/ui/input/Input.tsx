import { InputHTMLAttributes } from "react"
import { Input, Textarea } from "./style"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  hasError?: boolean
}

const InputEl = ({ type, hasError, ...props }: Props) => {
  if (type === "textarea") {
    return (
      <Textarea
        $hasError={hasError}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    )
  }
  return <Input type={type} $hasError={hasError} {...props} />
}

export default InputEl
