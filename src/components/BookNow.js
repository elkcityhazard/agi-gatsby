import React from 'react'

import { useEffect, useState } from 'react';

// React bootstrap

import {Container, Row, Col} from 'react-bootstrap'

export default function BookNow() {

    const [loaded, setLoaded] = useState(false)

    return (
        <Container as="section" className="book-now vh-100">
            <Row>
                <Col xl={9} className="mx-auto">
                <script src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>
                <div id="tidycal-embed" data-path="mark2/30-minute-meeting" className="h-100 w-100"></div>
                </Col>
            </Row>
        </Container>
    )
}
