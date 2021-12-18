import { Text } from "./style"

const TextEl = ({ children, ...props }) => <Text {...props}>{children}</Text>

export default TextEl
