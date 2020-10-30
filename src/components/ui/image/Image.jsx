import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const Image = ({ picture, alt, objectFit }) => (
  <Img
    alt={alt}
    fixed={picture.fixed || undefined}
    fluid={picture.fluid || undefined}
    objectFit={objectFit}
    style={{ width: "100%", height: "100%" }}
  />
)

Image.defaultProps = {
  alt: "",
  objectFit: "cover",
}

export default Image
