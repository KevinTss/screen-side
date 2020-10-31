import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const Image = ({ picture, alt, objectFit, svg }) => {
  if (picture) {
    return (
      <Img
        alt={alt}
        fixed={picture.fixed || undefined}
        fluid={picture.fluid || undefined}
        objectFit={objectFit}
        style={{ width: "100%", height: "100%" }}
      />
    )
  }

  if (svg) {
    return <img src={svg} alt={alt} />
  }

  return null
}

Image.defaultProps = {
  alt: "",
  objectFit: "cover",
}

export default Image
