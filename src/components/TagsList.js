import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupTags from '../utils/setupTags'


function TagsList() {

    const data = useStaticQuery(graphql`
    query getAllTagsQuery {
        allContentfulBlogPost {
          nodes {
            tags
          }
        }
      }
    `)

    const { allContentfulBlogPost: { nodes } } = data

    const newTags = setupTags(nodes)

    if (!data) {
        console.log('error, no posts found')
        return null
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Tags</h3>
                    <div>
                        {newTags.map((tag, index) => {
                            const [text, value] = tag
                            const tagSlug = slugify(text, { lower: true, trim: true, replacement: '-' })
                            return <Link to={`/tags/${tagSlug}`} key={index} className="d-block mb-2 btn btn-outline-info text-start">{text} ({value})</Link>
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TagsList;

