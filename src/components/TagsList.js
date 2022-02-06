import React from 'react';
import { Link } from 'gatsby'

import slugify from 'slugify'

import { Container, Row, Col } from 'react-bootstrap'

import setupTags from '../utils/setupTags'


function TagsList({ tags }) {

    console.log(tags)

    const newTags = setupTags(tags)

    if (!tags) {
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
                            return <Link to={`/tags/${tagSlug}`} key={index} className="d-block mb-2">{text} ({value})</Link>
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TagsList;
