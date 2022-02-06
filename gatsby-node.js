const { reporter } = require('gatsby/node_modules/gatsby-cli/lib/reporter/reporter')
const path = require('path')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions: { createPage } }, reporter) => {

    const result = await graphql(
        `
        query GetBlogPosts {
            allContentfulBlogPost {
              nodes {
                tags
              }
            }
          }
        `
    )

    //  Handle Error
    if (result.errors) {
        reporter.panicOnBuild(`Error with graphql query`)
    }

    result.data.allContentfulBlogPost.nodes.forEach((post) => {
        post.tags.forEach((tag) => {
            const slug = slugify(tag, {
                trim: true,
                replacement: '-'
            })
            createPage({
                path: `/tags/${slug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag,
                }
            })
        })
    })

}