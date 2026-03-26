import styled from "styled-components"

export const Text = styled(
  ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />
)`
  font-size: 1rem;
`
