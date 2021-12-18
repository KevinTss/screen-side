import Link from "next/link"

import { Image } from "../ui"

const Logo = ({ logo }) => (
  <Link href="/">
    <a>
      <Image src={logo} />
    </a>
  </Link>
)

export default Logo
