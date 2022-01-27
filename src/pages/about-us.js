import React, { useEffect } from 'react';

import { graphql, useStaticQuery } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

import { Container, Row, Col, Button } from 'react-bootstrap';

import './aboutUs.scss'

// Import AOS
import AOS from "aos";

// Import Custom CSS
import "../components/Header.scss";
import "aos/dist/aos.css";

function AboutUs() {

    const title = `Our Story - Absolutely Gorgeous Interiors`
    const subtitle = `Building For Beauty & Accessibility`

    const { placeholderImage, contentfulAboutUsPage } = useStaticQuery(
        graphql`
            query {
        placeholderImage: file(relativePath: {eq: "young-man-carpenter.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          breakpoints: [300, 768, 968, 1200, 1600, 1900]
        )
      }
    }
    contentfulAboutUsPage {
        id
        slug
        subtitle
        publishDate
        title
        childContentfulAboutUsPageIntroductionTextNode {
          introduction
        }
        childContentfulAboutUsPageProblemTextNode {
          id
          problem
        }
        childContentfulAboutUsPageFutureTextNode {
          id
          future
        }
        childContentfulAboutUsPageRiseToChallengeTextNode {
          riseToChallenge
        }
        childContentfulAboutUsPageSolutionTextNode {
          solution
        }
      }
  }
`    )

    console.log({ ...contentfulAboutUsPage })
    const image = getImage(placeholderImage)

    const bgImage = convertToBgImage(image)

    // Initialize AOS

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <>
            <BackgroundImage
                Tag="section"
                style={{
                    backgroundPosition: `50% 25%`
                }}
                // Spread bgImage into BackgroundImage:
                {...bgImage}
                preserveStackingContext
            >
                <Container fluid as="header" style={{
                    background: `rgba(0,0,0,0.5)`,
                    height: `100%`,
                    minHeight: `75vh`,
                    minWidth: `1000`,
                    display: `grid`
                }}
                    className="p-5"
                >
                    <Row className="d-flex justify-content-center align-items-center text-center">
                        <Col lg={9} className="mx-auto text-center p-3">
                            <div
                                className="mx-auto text-center text-uppercase fw-bolder"
                                data-aos="fade"
                                data-aos-delay="1250"
                                data-aos-duration="1250"
                            ><small className="text-white">About</small>&nbsp;&nbsp;<small className="text-success">Absolutely Gorgeous Interiors</small></div>
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="250"
                                data-aos-duration="1250"
                                className="display-1 text-white text-center">{contentfulAboutUsPage.title}</h1>
                        </Col>
                    </Row>
                </Container>
            </BackgroundImage>
            <Container as="main">
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        <h2 className="h2 text-center">{contentfulAboutUsPage.subtitle}</h2>
                    </Col>
                </Row>
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        {contentfulAboutUsPage.childContentfulAboutUsPageIntroductionTextNode.introduction}
                    </Col>
                </Row>
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        {contentfulAboutUsPage.childContentfulAboutUsPageProblemTextNode.problem}
                    </Col>
                </Row>
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        {contentfulAboutUsPage.childContentfulAboutUsPageRiseToChallengeTextNode.riseToChallenge}
                    </Col>
                </Row>
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        {contentfulAboutUsPage.childContentfulAboutUsPageSolutionTextNode.solution}
                    </Col>
                </Row>
                <Row as="section">
                    <Col lg={9} className="mx-auto p-3">
                        {contentfulAboutUsPage.childContentfulAboutUsPageFutureTextNode.future}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs;

