import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ListGroup from "react-bootstrap/ListGroup"

const Footer = () => (
  <footer>
    <div className="container-fluid">
      <div className="mt-3 text-center">
        <div className="row">
          <div className="mx-auto">
            <ListGroup horizontal className="justify-content-center">
              <ListGroup.Item className="border-0">
                <a
                  aria-label="facebook"
                  style={{ color: "inherit" }}
                  href="https://www.facebook.com/endearingmomentsnl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <a
                  aria-label="instagram"
                  style={{ color: "inherit" }}
                  href="https://www.instagram.com/endearing_moments_photography/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <a
                  aria-label="email"
                  style={{ color: "inherit" }}
                  href="mailto:masen0222@gmail.com"
                >
                  <FontAwesomeIcon icon={["far", "envelope"]} size="2x" />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <p>
          <small>
            Powered by{" "}
            <a
              href="https://github.com/OpenArchitex"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenArchitex
            </a>
            &copy;{new Date().getFullYear()}. Code licensed under an {` `}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            .
          </small>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
