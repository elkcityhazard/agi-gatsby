import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";
import { FaChevronRight, FaPhone } from "react-icons/fa";

import links from "../constants/navlinks";

// Custom CSS

import "./Footer.scss";

export default function Footer() {
  return (
    <Container fluid as="footer" className="bg-dark text-light p-3">
      <Row className="p-3">
        <Col md={9} className="mx-auto text-center border-bottom">
          <h3 className="h1 border-bottom pb-3">
            Absolutely Gorgeous Interiors, LLC
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptatibus, optio itaque, earum doloribus laudantium quia tempore
            nam, sequi ducimus perferendis reiciendis. Quas doloribus possimus a
            quam, nihil reprehenderit laudantium. Reprehenderit animi eaque
            quasi quia! Eius hic ad officiis praesentium dignissimos vel
            voluptas eum ea architecto cum maxime tenetur, reprehenderit
            officia. Dolorum fugit, rerum animi quis ea assumenda? Autem,
            necessitatibus! Fuga cumque ad similique id, autem assumenda eaque
            tempora asperiores a earum. Asperiores neque reprehenderit
            provident, doloremque repellat minus, illum ipsa quis temporibus
            repellendus quasi omnis totam inventore quibusdam id.
          </p>
        </Col>
      </Row>
      <Row className="p-5">
        <Col lg={4} className="mx-auto border-end mb-3">
          <h4>Our Promise</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            placeat, reprehenderit deleniti earum suscipit laborum similique cum
            asperiores quisquam excepturi?
          </p>
        </Col>
        <Col lg={2} className="mx-auto border-end mb-3">
          <h4>Subscribe</h4>
          <p>
            Subscribe for future tips, tricks, and promotions in your email
            inbox:
          </p>
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

