import React from 'react'

import slugify from 'slugify';

import { graphql, Link, useStaticQuery } from 'gatsby'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, Row, Col, Card } from 'react-bootstrap'

import ServiceCard from '../components/ServiceCard'
import ContentfulBlogSlug from '../pages/blog/{ContentfulBlogPost.slug}'
import TagsList from '../components/TagsList'

import '../pages/blog.scss'

export default function BlogListTemplate(props) {

    const { currentPage, numPages } = props.pageContext

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    console.log(props)

    const { allContentfulBlogPost: { nodes } } = props.data;



    return (
        <Container className="header-gradient">
            <Row as="header">
                <Col sm={12} lg={9} className="mx-auto p-3 text-center">
                    <h1>Keep Up On DIY Tips & Industry Updates</h1>
                </Col>
                <Col sm={12} lg={9} className="mx-auto p-3 text-center">
                    <p className="lead">🚀 Read all of our expert tips here.  Whether you are DIY 🧙, a professional 👷 of the industry, or want to keep up 🎓
                        on current construction industry trends, we have it here!</p>
                </Col>
            </Row>
            <Row className="flex-direction-start mx-auto" style={{ maxWidth: `100ch` }}>
                <Col sm={12} lg={8} className="p-3 text-center blog-list">
                    {nodes.map((node, index) => (

                        < Card key={node.id} className="bg-dark text-white p-3 mb-4 shadow" >
                            <Card.Img src={node.featuredImage.gatsbyImageData.images.fallback.src} title={node.featuredImage.title} alt={node.featuredImage.title} width="300" className="mb-3 shadow" />
                            <Card.Title><h2 className="h5 fw-bold text-decoration-underline">{node.title}</h2></Card.Title>
                            <Card.Text className="text-start">
                                <small className="d-inline-block pe-3 my-1"><strong>Publish Date:</strong> {new Date(node.publishDate).toLocaleDateString()}</small>
                                <small className="d-inline-block pe-3 my-1" ><strong>Author:</strong> {node.author}</small>
                                <small className="d-inline-block pe-3 my-1"><strong>Category: </strong>
                                    {node.category.map((cat, index) => {
                                        const catSlug = slugify(cat, {
                                            trim: true,
                                            lower: true,
                                            replacement: '-'
                                        })
                                        return <Link to={`/category/${catSlug}`} aria-role="button" aria-label="category button" link className="btn btn-danger btn-sm">
                                            {node.category}
                                        </Link>
                                    })}
                                </small>
                                <small className="d-inline-block pe-3 my-1" ><strong>Tags:</strong> {node.tags.map((tag, index) => {
                                    const tagSlug = slugify(tag, {
                                        trim: true,
                                        replacement: '-',
                                        lower: true
                                    })
                                    return (
                                        <Link key={index} to={`/tags/${tagSlug}`} aria-label="category button" className="btn btn-info btn-sm me-1" >
                                            {tag}
                                        </Link>
                                    )
                                })}</small>
                            </Card.Text>
                            <Card.Text className="text-start">
                                {node.description.description}
                            </Card.Text>
                            <Card.Text className="text-start"><Link className="btn btn-warning" to={`/blog/${node.slug}`}>{node.title}</Link></Card.Text>
                        </Card>
                    ))}
                    {!isFirst && (
                        <Link to={`/blog/${prevPage}`} className="btn btn-info m-2" rel="prev">
                            ← Previous Page
                        </Link>
                    )}
                    {!isLast && (
                        <Link to={`/blog/${nextPage}`} className="btn btn-info m-2" rel="next" disabled={currentPage === numPages ? true : false}>
                            Next Page →
                        </Link>
                    )}
                </Col>

                <Col as="aside" sm={12} lg={4}><TagsList posts={nodes} /></Col>
            </Row>
        </Container >
    )
}


export const paginatGetAllBlogPosts = graphql`
query paginateGetAllBlogPosts($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(skip: $skip, limit: $limit, sort: {fields: publishDate}) {
      nodes {
        id
        author
        category
        title
        publishDate
        featuredImage {
          title
          description
          gatsbyImageData(
            width: 1200
            sizes: "300, 499, 768, 968, 1200"
            quality: 100
            placeholder: BLURRED
            breakpoints: [300, 499, 768, 968, 1200, 1500]
          )
        }
        content {
          content
        }
        description {
          description
        }
        slug
        tags
      }
    }
  }
`