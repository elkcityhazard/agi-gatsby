import React, { useEffect } from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { FaCheck } from 'react-icons/fa'

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Custom CSS

import './WhyChooseUs.scss'
import CallNow from './CallNow';
import CTA2 from './CTA2'

export default function WhyChooseUs() {

    const data = [
        'We offer both residential and commercial services in the Traverse City, Michigan, area',
        'We are an experienced and professional interior construction contractor that has been in business for over 20 years',
        'We are a full service interior construction company with a wide range of experience in the residential, commercial, restaurant, and hospitality industries',
        'Our team is highly experienced in concrete construction, which is the backbone of residential and commercial construction',
        'Our professional flooring installation services are backed by over 20 years of experience and we will work with you to make your flooring dreams come true',
        'We have the knowledge and expertise to provide the best service possible to make your home stunning',
        'Our company offers a wide range of services including installation, design, and consultation',
        'Our company is dedicated to finding the best solution for your needs and making your home beautiful',
        'Our team is made up of experienced tile installers, who will work with you to create a tile project that is beautiful and functional',
        'We are a company that is focused on service, which means that we are always looking for ways to improve our company.'

    ]

    useEffect(() => {
        AOS.init()
        AOS.refresh();
    })


    return (
        <Container as="section" className="p-3">
            <Row className="p-3 text-center">
                <Col md={9} className="mx-auto text-center">
                    <h3 className="h1 text-dark text-uppercase">Why Choose<span className="text-success"> Absolutely Gorgeous Interiors</span></h3>
                    <hr width="100px" className="mx-auto text-dark shadow" style={{ maxWidth: `100px` }} />
                    <p className="text-start">
                        Absolutely Gorgeous Interiors, LLC is focused on client satisfaction, which means that our team is dedicated to providing high-quality service that will exceed your expectations.
                        We are one of the few <strong>interior construction contractors</strong> in Traverse City, Michigan, that truly cares about your needs and will go above and beyond to ensure complete customer satisfaction.
                        Here are some of the reasons why we are one of the best in the city:
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                    <StaticImage
                        src="../images/why-choose-us-500x500.jpeg"
                        alt="Why Choose Us"
                        className="mt-5 mx-auto rounded shadow"
                        loading="lazy"
                        layout="constrained"
                        placeholder="blurred"
                    />
                </Col>
                <Col md={6} className="mb-3">
                    <ul className="list-group-flush p-0 mx-auto">
                        {data.map((item, index) => {
                            return <li
                                key={index}
                                className="list-group-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 25}
                                data-aos-duration="1250"
                                data-aos-once="true"
                            > <span className="icon-container border border-success me-2"><FaCheck className="text-primary" /></span> {item} </li>
                        })}
                    </ul>
                </Col>
            </Row>
            <Row className="">
                <Col md={9} className="p-3 text-center mx-auto">
                    <h3 className="h1 text-dark text-uppercase">Quality Is Our<span className="text-success"> Top Priority </span>At Absolutely Gorgeous Interiors</h3>
                    <hr width="100px" className="mx-auto text-dark shadow" />
                </Col>
                <Col md={9} className="mx-auto text-start">
                    <p className="text-start">
                        Absolutely Gorgeous Interiors is a full service <strong>interior construction contractor</strong> in Traverse City, Michigan, that is dedicated to giving you a high-quality service that will exceed your expectations. We are focused on client satisfaction, which means that we will be able to provide you with a service that will make all of your dreams come true.
                    </p>
                    <p className="text-start">
                        Absolutely Gorgeous Interiors, LLC is a fully approved american with disability act licensed contractor that can ensure your facility meets current ADA recommendations and building code. We specialize in bathroom renovations and ADA compliant facilities.
                    </p>
                    <p className="text-start">
                        When it comes to renovating or expanding your house or office, you need a company that is reliable, trustworthy and will deliver on promises.
                        Absolutely Gorgeous Interiors is a company that is dedicated to providing high-quality service that will exceed your expectations.
                        Absolutely Gorgeous Interiors is focused on client satisfaction and delivering on promises with the highest quality materials and craftsmanship.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={9} className="mx-auto text-center text-lg-start ps-3">
                    <CallNow />
                </Col>
            </Row>
            {/* <CTA2 className="d-none" /> */}
            <Row className="mt-3 text-center">
                <Col md={9} className="mx-auto">
                    <h3 className="h1 text-dark text-uppercase">Learn More About<span className="text-success"> Interior Construction Contractor </span>Services</h3>
                    <hr width="100px" className="mx-auto text-dark shadow" />
                </Col>
                <Col md={9} className="mx-auto text-start">
                    <p className="text-left">
                        Searching for a Traverse City, Michigan home remodeling and <strong>interior construction contractor</strong> company can be overwhelming. The design and remodel process is often confusing to people who have no remodeling or construction experience.<br /><br />
                        When choosing a remodeling contractor in the Traverse City area, it's important to look for certain qualities. <br /><br />
                        These qualities describe our remodeling company. Our company's qualities include: Honesty, Integrity, Quality Materials, and Superior Craftsmanship. <br /><br />
                        Absolutely Gorgeous Interiors, a local Traverse City, Michigan owned business, offers each of the
                        necessary skills for success as a remodeling and <strong>interior construction contractor</strong> professional. The company has over 20 years of experience in each of the phases of a construction or remodeling project, from concept
                        through to finished product. These years of experience can take a project
                        from the earliest conceptual phase through to the completed project.<br /><br />
                        We are the Traverse City <strong>interior construction contractor</strong> you can rely on to make any size construction or remodel project seamless. We provide excellent service to customers in the Traverse City, Michigan area.

                        Our Traverse City, Michigan remodeling contractors are able to seamlessly work with any small or large remodeling project, providing our clients with optimum results and teamwork throughout the design and remodel process. We work with customers anywhere in Greater Traverse City, Michigan Michigan.
                        To request a free in-home remodeling consultation and estimate, <a href="https://tidycal.com/absolutely-gorgeous-interiors" title="book a free consultation now" target="_self" rel="noreferrer nofollow">book now</a> For general questions contact us here or call <a href="tel:+19897089620" title="call now" aria-label="call now">(989) 708-9620</a>.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
