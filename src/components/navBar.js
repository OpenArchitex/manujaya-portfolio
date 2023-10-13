import * as React from "react"
import {
  Container,
  DropdownButton,
  Dropdown,
  Image,
  Nav,
  Row,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import brandLogo from "../images/brandLogo.svg"
import { Link } from "gatsby"

const NavBar = () => (
  <>
    <Row>
      <Container className="text-center pt-4">
        <Link to="/">
          <Image src={brandLogo} className="nav-image" />
        </Link>
      </Container>
    </Row>
    <Row>
      <Nav>
        <Container className="navbar-links d-flex py-4 justify-content-center">
          <DropdownButton
            variant="none"
            title={<span className="portfolio-item">Portfolio</span>}
          >
            <Dropdown.Item href="/gallery/Birthday and Milestones">
              <span className="portfolio-item">Birthday and Milestones</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Family Sessions">
              <span className="portfolio-item">Family Sessions</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Graduation Sessions">
              <span className="portfolio-item">Graduation Sessions</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Maternity and Newborn">
              <span className="portfolio-item">Maternity and Newborn</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Portraits">
              <span className="portfolio-item">Portraits</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Seasonal Mini Sessions">
              <span className="portfolio-item">Seasonal Mini Sessions</span>
            </Dropdown.Item>
            <Dropdown.Item href="/gallery/Weddings">
              <span className="portfolio-item">Weddings</span>
            </Dropdown.Item>
          </DropdownButton>
          <Nav.Link className="link-secondary" href="/about">
            About
          </Nav.Link>
        </Container>
        <Container className="d-flex justify-content-center navbar-link-icons pb-3">
          <Nav.Link
            className="px-3 link-secondary"
            href="https://www.facebook.com/endearingmomentsnl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </Nav.Link>
          <Nav.Link
            className="px-3 link-secondary"
            href="https://www.instagram.com/endearing_moments_photography/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </Nav.Link>
          <Nav.Link
            className="px-3 link-secondary"
            href="mailto:masen0222@gmail.com"
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </Nav.Link>
        </Container>
      </Nav>
    </Row>
  </>
)

export default NavBar
