import React from 'react';
import {Link} from 'gatsby'

import {Container, Row, Col } from 'react-bootstrap'

import setupTags from '../utils/setupTags'


function TagsList({posts}) {
    
    const newTags = setupTags(posts)
    return (
        <Container>
            <Row>
                <Col>
                <h3>Tags</h3>
                <div>
                    {newTags.map((tag, index) => {
                        const [text, value] = tag
                        return <Link to={`${text}`} key={index} className="d-block mb-2">{text} ({value})</Link>
                    })}
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TagsList;
