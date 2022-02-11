import React from 'react'

import slugify from 'slugify';

import { graphql, Link, useStaticQuery } from 'gatsby'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, Row, Col, Card } from 'react-bootstrap'

import ServiceCard from '../components/ServiceCard'
import ContentfulBlogSlug from './blog/{ContentfulBlogPost.slug}'
import TagsList from '../components/TagsList'

import './blog.scss'



export default function Services({ data }) {
    const { allContentfulBlogPost: { nodes } } = data
    console.log(nodes)
    return (
        <Container>
            <Row>
                <Col sm={12} lg={9} className="mx-auto p-3 text-center">
                    <h1>Keep Up On DIY Tips & Industry Updates</h1>
                </Col>
                <Col sm={12} lg={9} className="mx-auto p-3 text-center">
                    <p className="lead">🚀 Read all of our expert tips here.  Whether you are DIY 🧙, a professional 👷 of the industry, or want to keep up 🎓
                        on current construction industry trends, we have it here!</p>
                </Col>
            </Row>
            <Row>
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
                            <Card.Text>
                                {node.description.description}
                            </Card.Text>
                            <Card.Text className="text-start"><Link className="btn btn-warning" to={`/blog/${node.slug}`}>{node.title}</Link></Card.Text>
                        </Card>
                    ))}
                </Col>

                <Col as="aside" sm={12} lg={4}><TagsList posts={nodes} /></Col>
            </Row>
        </Container >
    )

}

export const data = graphql`
query getAllBlogPosts {
    allContentfulBlogPost {
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
  }`
