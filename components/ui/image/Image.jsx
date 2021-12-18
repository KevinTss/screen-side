import Img from "next/image"

const Image = ({ alt, src }) => {
  return <Img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
}

Image.defaultProps = {
  alt: "",
}

export default Image
