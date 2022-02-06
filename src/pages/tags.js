import React from 'react';

import { graphql, Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupTags from '../utils/setupTags'

function Tags({ data }) {
    const newTags = setupTags(data.allContentfulBlogPost.nodes)
    return (
        <main>
            <Container as="section">
                <Row>
                    {newTags.map((tag, index) => {
                        const [text, value] = tag
                        const slug = slugify(text, {
                            trim: true,
                            replacement: '-'
                        })
                        return (<Link to={`${slug}`} key={index} className="d-block btn text-uppercase btn-outline-warning mx-auto my-3 p-3">
                            <h3>{text}</h3>
                            <p>{value}</p>
                        </Link>)

                    })}
                </Row>
            </Container>
        </main >
    );
}

export default Tags;

export const tagsQuery = graphql`
query getAllTags {
    allContentfulBlogPost {
      nodes {
        tags
      }
    }
  }
`
