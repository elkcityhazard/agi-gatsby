import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import links from '../constants/navlinks';

// React Bootstrap Imports

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

// Custom Styles

import './MainNavBar.scss'

export default function MainNavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid className="px-3">
          <Navbar.Brand as={Link} to="/"><StaticImage src="../images/logos/logo-ideas/agi-logo-idea-840x540-light-symbol.png" alt="brand logo" height="175" width="300" loading="lazy" placeholder="traced_svg" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {links.map((link, index) => {
                if (link.children) {
                  return (
                    <NavDropdown key={index} title={link.text} id="collasible-nav-dropdown" variant="dark" bg="dark">
                      {link.children.map((child, index) => {
                        return (
                          <div key={index}>
                            <NavDropdown.Item as={Link} to={child.url} variant="dark" bg="dark">{child.text}</NavDropdown.Item>
                            <NavDropdown.Divider />
                          </div>
                        )
                      })}
                    </NavDropdown>
                  )
                } else {
                  return <Nav.Link as={Link} to={link.url} bg="dark" variant="dark">{link.text}</Nav.Link>
                }
              })}
            </Nav>
            <Nav>
              <Nav.Link to="tel:+19897089620" className="btn btn-large btn-warning rounded-pill d-block fw-bolder m-2">(989) 708-9620</Nav.Link>
              <Nav.Link to="https://goo.gl/maps/WgyndTR66cCDbNLA7" target="_blank" rel="noreferrer nofollow" className="btn btn-large btn-warning rounded-pill d-block fw-bolder m-2">Directions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

