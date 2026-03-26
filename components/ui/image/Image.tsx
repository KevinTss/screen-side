interface Props {
  src: string
  alt?: string
}

const Image = ({ src, alt = "" }: Props) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={typeof src === "object" ? (src as { src: string }).src : src}
    alt={alt}
    style={{ width: "100%", height: "100%" }}
  />
)

export default Image
