import React from 'react';

import { graphql, Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupCategories from '../utils/setupCategories'

function Category({ data }) {
    const newCats = setupCategories(data.allContentfulBlogPost.nodes)
    console.log(newCats)
    return (
        <>
            <main>
                <Container as="section">
                    <Row className="flex-column">
                        {newCats.map((cat, index) => {
                            console.log(cat)
                            const [text, value] = cat
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

export default Category;

export const tagsQuery = graphql`
query getAllCategories {
    allContentfulBlogPost {
      nodes {
        category
      }
    }
  }
`
