import * as React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import { Container, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavBar = ({ siteTitle }) => (
  <Navbar bg="none" expand="lg">
    <Container fluid className="m-2">
      <Navbar.Brand>
        <Link to="/" className="brand-name">
          {siteTitle}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Container className="d-lg-flex py-5 py-lg-0 text-center">
            <Nav.Link href="/">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Container>
          <Container className="d-flex justify-content-center">
            <Nav.Link
              className="px-3"
              href="https://www.facebook.com/endearingmomentsnl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </Nav.Link>
            <Nav.Link
              className="px-3"
              href="https://www.instagram.com/endearing_moments_photography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Nav.Link>
            <Nav.Link className="px-3" href="mailto:masen0222@gmail.com">
              <FontAwesomeIcon icon={["far", "envelope"]} />
            </Nav.Link>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavBar
