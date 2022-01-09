import React from 'react'
import { useEffect } from 'react'

import {FaHome} from 'react-icons/fa'

import { Link } from 'gatsby'

import {Card, Button} from 'react-bootstrap'

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

import './ServiceCard.scss'


export default function ServiceCard({text, icon, aos, image, description, url}) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <Card data-aos={aos} data-aos-delay="100" data-aos-duration="1250" bg="secondary" text="dark" className="mb-3">
            <Card.Header className="d-flex align-items-center justify-content-between fw-bold text-decoration-underline">
                <Link to={url} className="text-dark">{text}</Link>
                {icon}</Card.Header>
                <Link to={url} className="text-dark">{image}</Link>
            <Card.Body>
                <Card.Title className="icon h3">{text}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button as={Link} to={url} variant="warning" className="d-block">{text}</Button>
            </Card.Body>
        </Card>
    )
}
