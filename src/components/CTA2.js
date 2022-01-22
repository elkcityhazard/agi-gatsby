import React from 'react'

import {Container, Row, Col, Button } from 'react-bootstrap'

import { StaticImage } from 'gatsby-plugin-image'

// Custom CSS

import './CTA2.scss';

function CTA2() {
    return (
		<>
		<Container className="bg-info text-white">
			<Row className="text-center p-3">
				<Col lg={6} className="mx-auto p-3">
					<div className="d-block mb-3"><span className="text-uppercase text-white"><b>We Can Make Your Home Beautiful</b></span></div>
					<div className="d-block mb-3">
					<h2 className="display-4 mt-2 text-light" style={{letterSpacing: `-2px`}}><b>Free Consultation</b></h2>
					</div>
					<div className="d-block mb-3">
					<p className="small"> Not sure how to get started with your home remodel or new build project?<br /> We can help walk you through the journey to a beautiful new home.</p>
					</div>
				</Col>
			</Row>
			<Row className="p-3 text-center">
				<Col md={6} className="mx-auto">
				<div className="mx-auto text-center">
						<StaticImage 
						src="../images/undraw_relaunch_day_902d.svg" 
						alt="Get A Free Consultation Today" 
						className="mx-auto text-center mt-3" 
						placeholder="blurred" 
						loading="lazy" 
						layout="constrained" 
						imgClassName="cta-image" 
						aspectRatio={1/1}S
						/>
					</div>
				</Col>
			</Row>
			<Row className="text-start p-3">
				<Col md={6} className="mx-auto">
				<div className="d-block mt-2 text-white">
						<h3 class="h4 fw-bold"><strong>Learn About Our Services</strong></h3>
					</div>
					<div className="d-block mt-2 text-white">
					<p>We offer <strong>free</strong> in-person and virtual consultations to discuss how we can make your home both beautiful and accessible.</p>
						</div>	
						<div className="d-block mt-2 text-center text-lg-start">
					<a href="https://tidycal.com/absolutely-gorgeous-interiors" target="_parent" rel="noreferrer" title="book a free consultation" aria-label="book a free consultation" className="d-block btn btn-large shadow rounded-pill btn-warning">Schedule Now</a>
					</div>
				</Col>
			</Row>
		</Container>
			</>
    )
}

export default CTA2

