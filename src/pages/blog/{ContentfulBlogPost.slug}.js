import React from 'react';

import { graphql, Link } from 'gatsby';

import slugify from 'slugify'

import BookNow from '../../components/BookNow'

import TagsList from '../../components/TagsList'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'

// Custom CSS

import './ContentfulBlogPost.scss'

export default function ({ data }) {
  const { contentfulBlogPost: {
    id,
    author,
    category,
    tags,
    publishDate,
    content: { content },
    description: { description },
    featuredImage: { gatsbyImageData },
    slug,
    title
  } } = data


  // Get Image

  const image = getImage(gatsbyImageData)

  let posts;
  return (
    <>
      <header className="p-3" style={{ minHeight: `50vh` }}>
        <Container>
          <Row>
            <Col sm={12} xl={6} className="mx-auto p-3">
              <h1 className="text-uppercase display-2">{title}</h1>
              <h2>{description}</h2>
              <div>
                <small className="d-inline-block pe-3 my-1"><strong>Publish Date:</strong> {new Date(publishDate).toLocaleDateString()}</small>
                <small className="d-inline-block pe-3 my-1" ><strong>Author:</strong> {author}</small>
                <small className="d-inline-block pe-3 my-1"><strong>Category: </strong>
                  <a as={Link} href="#" aria-role="button" aria-label="category button" link className="btn btn-danger btn-sm">
                    {category}
                  </a>
                </small>
                <small className="d-inline-block pe-3 my-1" ><strong>Tags:</strong> {tags.map((tag, index) => {
                  const tagSlug = slugify(tag, { lowercase: true, trim: true, replacement: '-' })
                  return (
                    <Link key={index} to={`/tags/${tagSlug}`} aria-role="button" aria-label="category button" link className="btn btn-info btn-sm me-1 fs">
                      {tag}
                    </Link>
                  )
                })}</small>
              </div>
            </Col>
            <Col sm={12} xl={6} className="mx-auto p-3">
              <GatsbyImage image={image} alt={description} aria-label="main image" />
            </Col>
          </Row>
        </Container>
      </header>
      <Container as="main">
        <Row className="p-3">
          <Col as="article" xl={8} className="mx-auto p-3 text-center">
            <div className="content-wrapper">
              {content}
            </div>
          </Col>
          <Col as="aside" xl={4}>
            <TagsList tags={tags} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const data = graphql`
query getSinglePost($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      id
      author
      category
      tags
      content {
        content
      }
      description {
        description
      }
      featuredImage {
        description
        gatsbyImageData(
          width: 968
          sizes: "300, 499, 768, 968, 1200"
          quality: 100
          layout: CONSTRAINED
          breakpoints: [300, 499, 768, 968, 1200]
          placeholder: BLURRED
        )
        title
      }
      publishDate
      slug
      title
      updatedAt
    }
  }
`

