import NextHead from "next/head"
import SchemaOrg from "./schema-org"

const websiteName = "Screen Side"
const baseUrl = "https://www.screenside.be"
const title = `Build Web sites and apps | ${websiteName}`
const description =
  "Build and maintain websites, applications or other project your need."
const facebookAppID = "1245595732188922"

const Head = () => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
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
      <link href={baseUrl} rel="canonical" />
      <link rel="alternate" href={baseUrl} hrefLang="x-default" />
      <link rel="alternate" href={baseUrl} hrefLang="en" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="fb:app_id" content={facebookAppID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={websiteName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </NextHead>
    <SchemaOrg url={baseUrl} title={title} />
  </>
)

export default Head
