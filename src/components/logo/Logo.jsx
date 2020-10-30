import React from "react"
import { Link } from "gatsby"

import { Image } from "../ui"

const Logo = ({ logo }) => {
  return (
    <Link to="/" style={{ width: "125px", height: "60px" }}>
      <Image picture={logo} objectFit="contain" />
    </Link>
  )
}

export default Logo
