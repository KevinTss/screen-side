import Img from "next/image"

const Image = ({ picture, alt, src }) => {
  if (picture) {
    return <Img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
  }

  // if (svg) {
  //   return <img src={svg} alt={alt} />
  // }

  return null
}

Image.defaultProps = {
  alt: "",
}

export default Image
