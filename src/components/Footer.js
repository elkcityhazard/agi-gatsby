import React from "react";

import { useState, useEffect } from 'react';

import { isEmail } from 'validator'

import { Link } from "gatsby";

import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { FaChevronRight, FaPhone } from "react-icons/fa";

import links from "../constants/navlinks";

// Custom CSS

import "./Footer.scss";

export default function Footer() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    setSuccess(false)
    setLoading(false)

    if (localStorage.getItem('newsletterEmail')) {
      const currentEmail = email;
      const storedEmail = JSON.parse(localStorage.getItem('newsletterEmail'))


      if (storedEmail.email === currentEmail) {
        setMessage('email has already been registered.')
        return setError(message)
      }
    }

    if (!isEmail(email)) {
      setEmail('')
      setLoading(false)
      setSuccess(false)
      return setError('invalid email')
    }
    setLoading(true)
    const data = await fetch(`https://api.formcake.com/api/form/429bfcb7-273f-4528-be00-c6499525fe9c/submission`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        location: 'footer-newsletter'
      })
    })
    const parsedData = await data.json();
    setSuccess(true);
    setLoading(false)
    console.log(data)
    console.log(parsedData)
    if (data.status === 200) {
      localStorage.setItem('newsletterEmail', JSON.stringify({ email: parsedData.data.email }))
    }
    return parsedData

  }
  return (
    <Container fluid as="footer" className="bg-dark text-light p-3">
      <Row className="p-3">
        <Col md={9} className="mx-auto text-center border-bottom">
          <h3 className="h1 border-bottom pb-3">
            Absolutely Gorgeous Interiors, LLC
          </h3>
          <p class="copy">
            Your home should be both beautiful and accessible to all.  It should also be a reflection of you and also inspire your creativity.
            Absolutely Gorgeous Interiors, LLC specializes in creating beautiful, accessible designs that everyone can enjoy.  Since 1991, customers
            have been blown away by our designs, construction, and attention to details.  Let us help you create an accessible and beautiful space for your
            family or business that will be enjoyed for years to come.  <a href="tel:+19897089620" title="free consultation">Call us today for a free consultation</a>
          </p>
        </Col>
      </Row>
      <Row className="p-5">
        <Col lg={2} className="mx-auto border-end mb-3">
          <h4>Our Promise</h4>
          <p>
            Spaces should be able to be enjoyed by everyone and anyone.
            We promise to create a space that is beautiful, accessible,
            and 100% inspiring to you, your family, or your customers.
            <a href="tel:+19897089620" title="free consultation">Call us today for a free consultation</a>
          </p>
        </Col>
        <Col lg={4} className="mx-auto border-end mb-3">
          <h4>Subscribe</h4>
          <p>
            Subscribe for future tips, tricks, and promotions in your email
            inbox:
          </p>
          {error && <p className="text-warning">{message}</p>}
          {success && <p>Thank you for signing up for our newsletter, {email}!</p>}
          {loading && <Spinner animation="border" variant="danger" />}
          {!success &&
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="growyourbusiness@agitraversebay.com" className="text-dark bg-light p-2" />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          }


        </Col>
        <Col lg={2} className="mx-auto border-end mb-3">
          <h4>Explore</h4>
          <nav>
            {links.map((link) => (
              <span className="d-block animate-chevron">
                <Link
                  to={link.url}
                  title={link.text}
                  className="text-warning text-decoration-none"
                >
                  <FaChevronRight className="text-white" /> {link.text}
                </Link>
              </span>
            ))}
          </nav>
        </Col>
        <Col lg={4} className="mx-auto mb-3">
          <h4>Find Us</h4>
          <address>
            <span className="d-block">Absolutely Gorgeous Interiors, LLC</span>
            <span className="d-block">12935 SW Bay Shore Dr #350A</span>
            <span className="d-block">Traverse City, Mi 49684</span>
            <span className="d-block">
              <FaPhone className="me-2 text-white" />
              <a
                href="tel:+19897089620"
                title="call now"
                className="text-warning text-decoration-none"
              >
                (989)708-9620
              </a>
            </span>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.504838409727!2d-85.63905168446499!3d44.79089927909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9bd515e1608f756!2sAbsolutely%20Gorgeous%20Interiors%2C%20LLC!5e0!3m2!1sen!2sus!4v1642964608303!5m2!1sen!2sus"
            width="100%"
            height="200"
            title="map to absolutely gorgeous interiors"
            allowfullscreen=""
            className="mt-3"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

