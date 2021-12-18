import Link from "next/link"
import Image from "next/image"

import logoUrl from "../../public/logo.jpg"

const Logo = () => (
  <Link href="/">
    <a>
      <Image
        src={logoUrl}
        alt="Picture of the author"
        width="150px"
        height="60px"
        objectFit="contain"
      />
    </a>
  </Link>
)

export default Logo
