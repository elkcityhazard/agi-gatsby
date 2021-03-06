import React from "react";
import { useEffect } from "react";
import { useStaticQuery, graphql, useScrollRestoration } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Custom Bootstrap Import
import { Container, Row, Col } from "react-bootstrap";

// Import Custom Component
import HeroBackground from "./BackgroundImage";

// Import AOS
import AOS from "aos";

// Import Custom CSS
import "../components/Header.scss";
import "aos/dist/aos.css";

export default function Header({ title, subTitle }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home-hand-hero.png" }) {
        id
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);
  const image = getImage(data.file.childImageSharp);

  const headersScrollRest = useScrollRestoration(`header-header-main-header`)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <HeroBackground>
      <header className="main-header p-3" style={{ minHeight: `100vh` }} {...headersScrollRest}>
        <Container>
          <Row className="align-items-center justify-content-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <h1
                className="text-primary"
                data-aos="fade"
                data-aos-delay="0"
                data-aos-duration="1250"
              >
                {title}
              </h1>
              <h2
                className="text-secondary"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="1250"
              >
                {subTitle}
              </h2>
              <a
                href="tel:+19897089620"
                className="btn btn-primary mb-2 mx-1"
                data-aos="fade"
                data-aos-delay="1250"
                data-aos-duration="1250"
              >
                (989) 708-9620
              </a>
              <a

                href="https://tidycal.com/absolutely-gorgeous-interiors"
                target="_blank"
                rel="noreferrer nofollow"
                className="btn btn-primary mb-2 mx-1"
                data-aos="fade"
                data-aos-delay="1250"
                data-aos-duration="1250"
              >Free Consultation</a>
            </Col>
            <Col lg={6}>
              <GatsbyImage
                image={image}
                layout="fullWidth"
                placeholder="blurred"
                alt="hero image"
              />
            </Col>
          </Row>
        </Container>

      </header>
    </HeroBackground>
  );
}
