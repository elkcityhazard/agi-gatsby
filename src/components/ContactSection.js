import React, { useState, useEffect } from "react";

import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import isURL from "validator/lib/isURL";

import validator from "validator";

// Custom CSS
import "./ContactSection.scss";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendData = async (name, email, message) => {
    setLoading(true);
    name = validator.escape(name)
    email = validator.escape(email)
    message = validator.escape(message)
    const postData = await fetch(`${process.env.GATSBY_MAIN_FORM_URI}`, {
      method: "POST",
      mode: "cors",
      headers: {
          "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, message}),
    });
    return postData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      setError("Invalid form values.  Try again.");
    }

    if (!validator.isEmail(email)) {
      setError("Invalid email value.  Try again");
    }

    const dataArray = new Array(name, message);

    return console.log(error)

    if (error === "") {
      sendData(name, email, message).then((response) => {
        console.log(response);
        setError(false);
        setLoading(false);
        setSuccess("Your message has been successfully recorded");
      });
    } else {
      setError("invalid data submission"); 
    }
  };

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
