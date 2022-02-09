import React from 'react'
import { Link } from 'gatsby';
import links from '../constants/navlinks';

// React Bootstrap Imports

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

// Custom Styles

import './MainNavBar.scss'

export default function MainNavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">AGI</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {links.map((link, index) => {
                if (link.children) {
                  return (
                    <NavDropdown key={index} title={link.text} id="collasible-nav-dropdown" variant="light" bg="light">
                      {link.children.map((child, index) => {
                        return (
                          <div key={index}>
                            <NavDropdown.Item as={Link} to={child.url} variant="light" bg="light">{child.text}</NavDropdown.Item>
                            <NavDropdown.Divider />
                          </div>
                        )
                      })}
                    </NavDropdown>
                  )
                } else {
                  return <Nav.Link as={Link} to={link.url} style={{ color: link.color }}>{link.text}</Nav.Link>
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

