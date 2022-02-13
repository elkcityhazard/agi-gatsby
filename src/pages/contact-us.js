import React from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { FaPhoneSquareAlt, FaEnvelopeSquare, FaDirections, FaFacebookSquare, FaInstagramSquare, FaRegCalendarAlt } from 'react-icons/fa'

import ContactSection from '../components/ContactSection'
import BookNow from '../components/BookNow';



export default function ContactUs() {
    const title = `Contact Absolutely Gorgeous Interiors`
    return (
        <Container as="main">
            <Row className="p-3">
                <Col className="text-center mx-auto p-3">
                    <h1 className="h1 mb-3">{title}</h1>
                    <p className="lead mx-auto text-start" style={{
                        maxWidth: `75ch`
                    }}>
                        Still have questions or want to get started?
                        We know you want your home to be <strong>beautiful</strong> and <strong>accessible.</strong>
                        We will remodel or build your home to your exact specifications, making it both <strong>beautiful</strong> and <strong>accessible.</strong>
                        We can help turn your home into a beautiful and accessible place with our complete construction services.
                        Contact us today for a free consultation.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col as="section">
                    <h2 className="h3 mb-3">We Are Here For You</h2>
                    <p className="text-muted">We are available by appointment for free consultations and in home assessments.</p>
                    <h2 className="h3 text-uppercase">Contact Information</h2>
                    <div className="d-block mb-3 border-bottom">
                        <ul className="list-group mb-3">
                            <li className="list-group-item"><FaPhoneSquareAlt size={32} className="text-warning me-2" /> <a href="tel:+19897089620" aria-label="Call Absolutely Gorgeous Interiors" title="Call Absolutely Gorgeous Interiors" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted">Call Us Now (989) 708-9620</a></li>
                            <li className="list-group-item"><FaEnvelopeSquare size={32} className="text-warning me-2" /> <a href="mailto:mark@agitraversebay.com" aria-label="Email Mark Delikta" title="Email Mark Delikta" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted">mark@agitraversebay.com</a> </li>
                            <li className="list-group-item"><FaRegCalendarAlt size={32} className="text-warning me-2" /><span>Schedule an Interior Construction Consult: </span><a href="https://tidycal.com/absolutely-gorgeous-interiors/free-30-minute-interior-construction-consultation" title="free concrete project consultation" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted" aria-label="schedule a concrete consultation" rel="nofollow noreferrer">Free Project Consultation</a></li>
                        </ul>
                        <h2 className="h3 text-uppercase">Concrete Projects</h2>
                        <ul className="list-group mb-3">
                            <li className="list-group-item"><FaEnvelopeSquare size={32} className="text-warning me-2" /> <a href="mailto:don@agitraversebay.com" aria-label="Email Donald" title="Email Donald" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted">don@agitraversebay.com</a> </li>
                            <li className="list-group-item"><FaRegCalendarAlt size={32} className="text-warning me-2" /><span>Schedule A Concrete Consult: </span><a href="https://tidycal.com/absolutely-gorgeous-interiors/30-minute-free-concrete-project-consultation" title="free concrete project consultation" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted" aria-label="schedule a concrete consultation" rel="nofollow noreferrer">Free Concrete Project Consultation</a></li>
                        </ul>
                    </div>
                    <div className="d-block mb-3 border-bottom">
                        <h2 className="h3 text-uppercase mb-3">Address </h2>
                        <address className="mb-3">
                            Absolutely Gorgeous Interiors, LLC <br />
                            12935 SW Bay Shore Drive #350A <br />
                            Traverse City, Michigan 49684
                        </address>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.504838409727!2d-85.63905168446499!3d44.79089927909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd9bd515e1608f756!2sAbsolutely%20Gorgeous%20Interiors%2C%20LLC!5e0!3m2!1sen!2sus!4v1642964608303!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            title="map to absolutely gorgeous interiors"
                            allowfullscreen=""
                            className="mb-3"
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="d-block mb-3 border-bottom">
                        <h2 className="h3 text-uppercase mb-3">Social</h2>
                        <ul className="list-group mb-3">
                            <li className="list-group-item"><FaFacebookSquare size={32} className="text-warning me-2" /> <a href="/#" aria-label="visit absolutely gorgeous interiors on facebook" target="_blank" rel="noreferrer nofollow" title="Absolutely Gorgeous Interiors Facebook" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted">Join Our Facebook Group</a></li>
                            <li className="list-group-item"><FaInstagramSquare size={32} className="text-warning me-2" /> <a href="/#" aria-label="visit absolutely gorgeous interiors on instagram" target="_blank" rel="noreferrer nofollow" title="Absolutely Gorgeous Interiors Instagram account" className="fw-medium text-decoration text-uppercase my-2 mx-auto text-muted">Follw Us On Instragram</a> </li>
                        </ul>
                    </div>
                </Col>
                <Col as="section">

                    <BookNow />
                    <ContactSection />
                </Col>
            </Row>
        </Container>
    )
}