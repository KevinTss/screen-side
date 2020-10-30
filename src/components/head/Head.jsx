import React from "react"
import { Helmet } from "react-helmet"

const baseUrl = "https://www.screenside.be"

const Head = () => {
  return (
    <Helmet>
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
      <meta
        content="Build and maintain websites, applications or other project your need."
        name="description"
      />
      <meta name="author" content="Screen Side" />
      <link href={baseUrl} rel="canonical" />
      <link rel="alternate" href={baseUrl} hreflang="x-default" />
      <link rel="alternate" href={baseUrl} hreflang="en" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;700&display=swap"
        rel="stylesheet"
      ></link>
      <title>{"Screen Side - Build Web sites and apps"}</title>
    </Helmet>
  )
}

export default Head
