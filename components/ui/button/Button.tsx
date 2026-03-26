import { ButtonHTMLAttributes } from "react"
import { Button } from "./style"

const ButtonEl = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Button {...props}>{children}</Button>
)

export default ButtonEl
