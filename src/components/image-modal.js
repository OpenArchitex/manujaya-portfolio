import React from "react"
import { Container, Modal } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"

const ImageModal = ({ image, show, handleClose }) => (
  <Modal size="lg" centered show={show} onHide={handleClose}>
    <Modal.Body bsPrefix="modal-image-body">
      <Container className="modal-image-container" onClick={handleClose}>
        <GatsbyImage image={image} alt="Enlarged Image" />
      </Container>
    </Modal.Body>
  </Modal>
)

export default ImageModal
