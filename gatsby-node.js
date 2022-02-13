const { createPrivateKey } = require('crypto')
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
                category
                id
              }
            }
          }
        `
    )

    //  Handle Error
    if (result.errors) {
        reporter.panicOnBuild(`Error with graphql query`)
    }


    const posts = result.data.allContentfulBlogPost.nodes;

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
            component: path.resolve('./src/templates/blog-list-template.js'),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                numPages: numPages
            },
        })
    })


    result.data.allContentfulBlogPost.nodes.forEach((post) => {
        console.log(post)
        post.tags.forEach((tag) => {
            const slug = slugify(tag, {
                trim: true,
                replacement: '-',
                lower: true
            })
            createPage({
                path: `/tags/${slug}`,
                component: path.resolve(`src/templates/tag-template.js`),
                context: {
                    tag: tag,
                }
            })
        })

        post.category.forEach(cat => {
            const categorySlug = slugify(cat, {
                trim: true,
                replacement: '-',
                lower: true
            })
            createPage({
                path: `/category/${categorySlug}`,
                component: path.resolve(`src/templates/category-template.js`),
                context: {
                    category: cat
                }
            })
        })
    })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `allContentfulBlogPost`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}