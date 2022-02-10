import React from 'react';
import { Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupCategories from '../utils/setupCategories'


function TagsList({ posts }) {

    const newCategories = setupCategories(posts)

    if (!posts) {
        return null
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Categories</h3>
                    <div>
                        {newCategories.map((cat, index) => {
                            const [text, value] = cat
                            const catSlug = slugify(text, { lower: true, trim: true, replacement: '-' })
                            return <Link to={`/tags/${catSlug}`} key={index} className="d-inline-block text-info text-decoration-none mb-2 me-2">{text} ({value})</Link>
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TagsList;
