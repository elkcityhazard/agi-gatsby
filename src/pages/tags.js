import React from 'react';

import { graphql, Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupTags from '../utils/setupTags'
import TagsList from '../components/TagsList'

function Tags({ data }) {
    console.log(data.allContentfulBlogPost.nodes)
    const newTags = setupTags(data.allContentfulBlogPost.nodes)
    console.log(newTags)
    return (
        <>
            <main>
                <Container as="section">
                    <Row className="flex-column">
                        {newTags.map((tag, index) => {
                            const [text, value] = tag
                            const slug = slugify(text, {
                                trim: true,
                                lower: true,
                                replacement: '-'
                            })
                            return (
                            <Col md={6} className="mx-auto p-3 text-center">
                            <Link to={`${slug}`} key={index} className="btn btn-lg d-block text-uppercase btn-outline-warning mx-auto my-3 p-3">
                                <h3>{text}</h3>
                                <p>{value}</p>
                            </Link>
                            </Col>
                            )

                        })}
                    </Row>
                </Container>
            </main >
            {/* <aside>
                <Container>
                    <Row>
                        <Col>
                            <TagsList posts={data.allContentfulBlogPost.nodes} />
                        </Col>
                    </Row>
                </Container>
            </aside> */}
        </>
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