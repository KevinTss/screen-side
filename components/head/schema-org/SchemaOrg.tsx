import Head from "next/head"

interface Props {
  url: string
  title: string
}

const SchemaOrg = ({ url, title }: Props) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: title,
    },
  ]

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
      />
    </Head>
  )
}

export default SchemaOrg
