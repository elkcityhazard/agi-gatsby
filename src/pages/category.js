import React from 'react';

import { graphql, Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupCategories from '../utils/setupCategories'

import CategoryList from '../components/CategoryList'

import SEO from '../components/SEO'

const title = "Category Taxonomies"
const description = '';

function Category({ data }) {
    const newCats = setupCategories(data.allContentfulBlogPost.nodes)
    return (
        <>
            <SEO title={title} description={description}>

            </SEO>
            <Container className="mx-auto">
                <Row className="text-center">
                    <Col>
                        <h1>Categories</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <aside>

                            <CategoryList posts={data.allContentfulBlogPost.nodes} />

                        </aside>
                    </Col>
                    <Col lg={9}>
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
                                            <Col md={6} className="p-3 text-center">
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
                    </Col>
                </Row>
            </Container>
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
