import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useState } from "react"
import ImageModal from "../../components/image-modal"

const getArraySlices = array => {
  const slices = [[], [], [], [], []]
  for (let i = 0; i < 5; i++) {
    for (let j = i; j < array.length; j += 5) {
      slices[i].push(array[j])
    }
  }
  return slices
}

const getFileName = relativePath => {
  return parseInt(relativePath.split("/")[1].split(".")[0])
}

const Gallery = ({ location, data }) => {
  const folderName = location.pathname.split("/")[2].replaceAll("%20", " ")
  const images = data?.allFile.nodes
    .filter(node => node.relativePath.includes(folderName))
    .sort((a, b) => getFileName(a.relativePath) > getFileName(b.relativePath))
  const arraySlices = getArraySlices(images)
  const [show, setShow] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = image => {
    setSelectedImage(image)
    setShow(true)
  }

  const getImages = images => {
    return images?.map(image => {
      const portfolioImage = image?.childImageSharp?.gatsbyImageData
      const folderName = image.relativePath.split("/")[0]
      return (
        <Row
          md
          className="pb-2 image-container"
          onClick={() => handleShow(portfolioImage)}
        >
          <GatsbyImage image={portfolioImage} alt={folderName} />
        </Row>
      )
    })
  }

  return (
    <Layout>
      <Container>
        <h2 className="text-center py-5">{folderName}</h2>
        <Row>
          {images &&
            arraySlices.map(slice => (
              <Col sm className="px-3">
                {getImages(slice)}
              </Col>
            ))}
        </Row>
      </Container>
      <ImageModal image={selectedImage} show={show} handleClose={handleClose} />
    </Layout>
  )
}

export const Head = () => <Seo title="Gallery" />

export const featuredImageQuery = graphql`
  query ImageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "portfolio-images" }
        relativePath: { regex: "//[0-9]+.jpg/" }
      }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default Gallery
