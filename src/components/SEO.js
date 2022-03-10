import React from 'react'

import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet';

import { useStaticQuery, graphql } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image'

const query = graphql`
query siteMetaData {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
    file(relativePath: {eq: "logos/social/twitter/share.png"}) {
      id
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`

export default function SEO({ title, description, location }) {

  const { site, file } = useStaticQuery(query)

  const metaTitle = title || site.siteMetadata.title

  const metaDescription = description || site.siteMetadata.description

  const { siteUrl } = site.siteMetadata || `https://www.agitraversebay.com`

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
        itemScope: true,
        itemType: "https://schema.org/Article"
      }}
      title={`${metaTitle} | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: 'og:url',
          content: `${siteUrl + location.pathname}`,
        },
        {
          property: 'og:image',
          content: `${siteUrl + file.childImageSharp.fixed.src}`
        },
        {
          property: `og:image:alt`,
          content: description
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:site_name`,
          content: `Absolutely Gorgeous Interiors, LLC`
        },
        {
          property: `og:locale`,
          content: `en_US`
        },
        {
          property: `article:author`,
          content: `Absolutely Gorgeous Interiors`
        },
        {
          property: `twitter:card`,
          content: `summary`
        },
        {
          property: `twitter:site`,
          content: `@agitraversebay`
        },
        {
          property: `twitter:creator`,
          content: `@agitraversebay`
        },
        {
          property: `twitter:url`,
          content: `${siteUrl + location.pathname}`
        },
        {
          property: `twitter:title`,
          content: `${metaTitle}`
        },
        {
          property: `twitter:description`,
          content: `${description}`
        },
        {
          property: `twitter:image`,
          content: `${siteUrl + file.childImageSharp.fixed.src}`
        },
        {
          property: `twitter: image: alt`,
          content: `${description} `
        },
        {
          itemProp: `name`,
          content: `${metaTitle} `
        },
        {
          itemProp: `description`,
          content: `${description} `
        },
        {
          itemProp: `image`,
          content: `/ images / logos / social / twitter / profile.png`
        }

      ]}>



    </Helmet>
  )
}
