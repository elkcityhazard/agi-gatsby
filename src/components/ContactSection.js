import React, { useState, useEffect } from "react";

import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import isURL from "validator/lib/isURL";

import validator from "validator";

// Custom CSS
import "./ContactSection.scss";

export default function ContactSection() {
  const [loaded, setLoaded] = useState(null)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!loaded) {
      setLoaded(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    setLoading(true)
    setSuccess(false)

    if (!name || !email || !message) {
      return setError('invalid data entry')
    }


    if (!validator.isEmail(email)) {
      return setError('invalid data entry.')
    }

    const cleanedName = validator.escape(name).trim();
    const cleanedEmail = validator.escape(email).trim();
    const cleanedMessage = validator.escape(message).trim();

    const data = await fetch(process.env.GATSBY_MAIN_FORM_URI, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cleanedName,
        email: cleanedEmail,
        message: cleanedMessage
      })
    });
    if (data.status === 200) {

      const parsedData = await data.json();
      const { data: { name, email, message } } = parsedData;
      setError(false)
      setLoading(false)
      setSuccess("Thank you for messaging us.  We will review your email and get back to you!")
      return console.log(name, email, message)
    } else {
      return setError('something went wrong')
    }

  }


  return (
    <Container fluid bg="secondary" className="p-3">
      <Row className="p-3">
        <Col md={9} className="mx-auto">
          <Col md={9} className="mx-auto text-center">
            <h3 className="h1 text-uppercase">
              Contact <span className="text-success">Us</span>
            </h3>
            <hr width="100px" className="mx-auto text-dark shadow" />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="mx-auto">
          {!success &&
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group
                className="mb-3"
                controlId="primaryContactForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="primaryContactForm.ControlInput2"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="primaryContactForm.ControlTextarea1"
              >
                <Form.Label>Please enter your message</Form.Label>
                <Form.Control
                  as="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
              </Form.Group>
              <Form.Group className="text-center">
                <Button type="submit" className="mx-3" disabled={success ? true : false}>
                  Submit
                </Button>
                <Button type="reset" className="mx-3">
                  Reset
                </Button>
              </Form.Group>
            </Form>
          }
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mx-auto p-3">
          {error && <p className="bg-danger text-white p-3">{error}</p>}
          {isLoading && <Spinner />}
          {success && <p className="bg-success text-white p-3">{success}</p>}
        </Col>
      </Row>
    </Container>
  );
}
