require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const siteUrl = process.env.URL || `https://agitraversebay.com`;

module.exports = {
  siteMetadata: {
    siteUrl: "https://agitraversebay.com/",
    description: "We are a luxury interior construction company In Traverse City Michigan.  We specialize in concrete, tile, flooring, and accessible building.",
    title: "Absolutely Gorgeous Interiors",
    twitterImg: `./src/images/logos/social/twitter/share.png`,
    facebookImg: `./src/images/logos/social/facebook/share.png`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/tags`, `/categories`, `/category`, `/null`],
        query: `
        {
          allContentfulService {
            nodes {
              updatedAt
              slug
            }
          }
          contentfulAboutUsPage {
            id
            updatedAt
            slug
          }
          allContentfulBlogPost {
            nodes {
              updatedAt
              slug
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allContentfulService,
          allContentfulBlogPost
        }) => {
          const posts = allContentfulBlogPost.nodes.map((node) => {
            const {slug, updatedAt} = node
            return {
              path: `/blog/${slug}`,
              lastmod: updatedAt,
              changefreq: "never",
              priority: 0.7,
            }
          })
          const services = allContentfulService.nodes.map((node) => {
            const {slug, updatedAt} = node
            return {
              path: `/services/${slug}`,
              lastmod: updatedAt,
              changefreq: "never",
              priority: 0.7,
            }

          })

          const home = {
            path: '/',
            lastmod: posts[0].lastmod,
            changefreq: 'never',
            priority: 0.7
          }

          const blog = {
            path: '/blog',
            lastmod: posts[0].lastmod,
            changefreq: 'never',
            priority: 0.7
          }

          return [...services, ...posts, home, blog ]
        },
        serialize: ({path, lastmod, changefreq, priority}) => {
          return {
            url: path,
            lastmod,
            changefreq,
            priority
          }
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "298593162",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: "./src/components/",
      },
      __key: "components",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery",
        path: "./src/gallery/",
      },
      __key: "gallery",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
      __key: "markdown-pages",
    },
    {
      resolve: "gatsby-plugin-sumo",
      options: {
        sumoSiteId: '7b6f548845c0146f30c426c9ee4531ad9d946e3e37866aefc4703b5d2b5c8cbe'
      }
    }
  ],
};
