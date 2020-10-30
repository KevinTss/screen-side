/**
 * See here:
 * https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/2411ff0063523499d1ac712fb3af6428545aa668/src/components/SEO/SchemaOrg.js
 */
import React from "react"
import { Helmet } from "react-helmet"

const SchemaOrg = ({ url, title }) => {
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
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  )
}

export default React.memo(SchemaOrg)
