import { HTMLAttributes } from "react"
import { Text } from "./style"

const TextEl = ({
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => <Text {...props}>{children}</Text>

export default TextEl
