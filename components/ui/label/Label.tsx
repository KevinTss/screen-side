import { LabelHTMLAttributes } from "react"
import { Label } from "./style"

const LabelEl = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => (
  <Label {...props}>{children}</Label>
)

export default LabelEl
