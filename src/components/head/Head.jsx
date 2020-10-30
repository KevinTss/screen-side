import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import SchemaOrg from "./schema-org"

// const author = "Kevin Tassi"
const websiteName = "Screen Side"
const baseUrl = "https://www.screenside.be"
const title = `Build Web sites and apps | ${websiteName}`
const description =
  "Build and maintain websites, applications or other project your need."
const facebookAppID = "1245595732188922"

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      ogImage: file {
        absolutePath
      }
    }
  `)

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=yes"
        name="viewport"
      />
      <meta
        content="web, websites, sites, app, apps, HTML, CSS, JavaScript"
        name="keywords"
      />
      <meta content={description} name="description" />
      <meta name="author" content="Screen Side" />

      {/* Links */}
      <link href={baseUrl} rel="canonical" />
      <link rel="alternate" href={baseUrl} hreflang="x-default" />
      <link rel="alternate" href={baseUrl} hreflang="en" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;700&display=swap"
        rel="stylesheet"
      />

      {/* OpenGraph tags */}
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={data.ogImage.absolutePath} />
      <meta property="fb:app_id" content={facebookAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={websiteName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={data.ogImage.absolutePath} />

      <SchemaOrg url={baseUrl} title={title} />
    </Helmet>
  )
}

export default Head
