import React from 'react'

import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
query siteMetaData {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`

export default function SEO({ title, description }) {

    const { site } = useStaticQuery(query)

    const metaTitle = title || site.siteMetadata.title

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{ lang: "en" }}
            title={`${metaTitle} | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                }
            ]}>

        </Helmet>
    )
}
