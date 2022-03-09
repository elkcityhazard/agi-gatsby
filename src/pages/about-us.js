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

// SEO

import SEO from '../components/SEO'

function AboutUs({ location, data }) {

  const title = `Our Story - Absolutely Gorgeous Interiors`
  const subtitle = `Building For Beauty & Accessibility`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  const { placeholderImage, contentfulAboutUsPage } = useStaticQuery(
    graphql`
  {
    placeholderImage: file(relativePath: {eq: "young-man-carpenter.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData(width: 1920)
        }
      }
    contentfulAboutUsPage {
      id
      slug
      subtitle
      publishDate
      title
      description {
        description
      }
      childContentfulAboutUsPageIntroductionTextNode {
        introduction
      }
      childContentfulAboutUsPageProblemTextNode {
        id
      }
      childContentfulAboutUsPageFutureTextNode {
        id
      }
      futureImg {
        gatsbyImageData(width: 500)
      }
      problemImg {
        gatsbyImageData(width: 500)
      }
      introImg {
        gatsbyImageData(width: 500)
      }
      riseToChallengeImg {
        gatsbyImageData(width: 500)
      }
      solutionsImg {
        gatsbyImageData(width: 500)
      }
      childContentfulAboutUsPageRiseToChallengeTextNode {
        riseToChallenge
      }
      childContentfulAboutUsPageSolutionTextNode {
        solution
      }
      childrenContentfulAboutUsPageFutureTextNode {
        future
      }
      childrenContentfulAboutUsPageIntroductionTextNode {
        introduction
      }
      childrenContentfulAboutUsPageProblemTextNode {
        problem
      }
      childrenContentfulAboutUsPageRiseToChallengeTextNode {
        riseToChallenge
      }
      childrenContentfulAboutUsPageSolutionTextNode {
        solution
      }
    }
    contentfulAboutUsPageRiseToChallengeTextNode {
      riseToChallenge
    }
  }
`
  )

  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  // Initialize AOS

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <SEO title={contentfulAboutUsPage.title} description={contentfulAboutUsPage.description.description} location={location} />
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
        <Row as="section" className="justify-content-center align-items-center p-5">
          <Col lg={6} className="mx-auto p-5">
            <h2 className="h2 text-center my-5">{contentfulAboutUsPage.subtitle}</h2>
          </Col>
        </Row>
        <Row as="section" className="justify-content-center align-items-center">
          <Col lg={6} className="mx-auto p-3 circle">
            <h3>Our History Goes Back 20 Years</h3>
            {contentfulAboutUsPage.childContentfulAboutUsPageIntroductionTextNode.introduction}
          </Col>
          <Col lg={6} className="mx-auto p-3">
            <GatsbyImage placeholder="blurred" loading="lazy" layout="constrained" image={contentfulAboutUsPage.introImg.gatsbyImageData} alt={'image'} />
          </Col>
        </Row>
        <Row as="section" className="justify-content-center align-items-center">
          <Col lg={6} className="mx-auto p-3">
            <GatsbyImage placeholder="blurred" loading="lazy" layout="constrained" image={contentfulAboutUsPage.problemImg.gatsbyImageData} alt={'image'} width={300} />
          </Col>
          <Col lg={6} className="mx-auto p-3 circle success">
            <h3>Our Committment To Integrity</h3>
            {contentfulAboutUsPage.childrenContentfulAboutUsPageProblemTextNode[0].problem}
          </Col>
        </Row>
        <Row as="section" className="justify-content-center align-items-center">
          <Col lg={6} className="mx-auto p-3 circle">
            <h3>We Are Ready To Rise To The Challenge For You</h3>
            {contentfulAboutUsPage.childContentfulAboutUsPageRiseToChallengeTextNode.riseToChallenge}
          </Col>
          <Col lg={6} className="mx-auto p-3">
            <GatsbyImage placeholder="blurred" loading="lazy" layout="constrained" image={contentfulAboutUsPage.riseToChallengeImg.gatsbyImageData} alt={'image'} />
          </Col>
        </Row>
        <Row as="section" className="justify-content-center align-items-center">
          <Col lg={6} className="mx-auto p-3">
            <GatsbyImage placeholder="blurred" loading="lazy" layout="constrained" image={contentfulAboutUsPage.solutionsImg.gatsbyImageData} alt={'image'} />
          </Col>
          <Col lg={6} className="mx-auto p-3 circle success">
            <h3>It All Begins With Listening To You</h3>
            {contentfulAboutUsPage.childContentfulAboutUsPageSolutionTextNode.solution}
          </Col>
        </Row>
        <Row as="section" className="justify-content-center align-items-center">
          <Col lg={6} className="mx-auto p-3 circle">
            <h3>We Build For Beauty and Accessibility</h3>
            {contentfulAboutUsPage.childrenContentfulAboutUsPageFutureTextNode[0].future}
          </Col>
          <Col lg={6} className="mx-auto p-3">
            <GatsbyImage placeholder="blurred" loading="lazy" layout="constrained" image={contentfulAboutUsPage.futureImg.gatsbyImageData} alt={'image'} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutUs;

