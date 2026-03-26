import Link from "next/link"
import Image from "next/image"
import logoUrl from "../../public/logo.jpg"

const Logo = () => (
  <Link href="/">
    <Image
      src={logoUrl}
      alt="ScreenSide"
      width={150}
      height={60}
      style={{ objectFit: "contain" }}
    />
  </Link>
)

export default Logo
