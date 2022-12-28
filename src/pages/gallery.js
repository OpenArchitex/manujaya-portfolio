import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Col, Container, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const getImages = images => {
  return images?.map(image => {
    const portfolioImage = image?.childImageSharp?.gatsbyImageData
    const folderName = image.relativePath.split("/")[0]
    return (
      <Col md className="pb-4">
        <GatsbyImage image={portfolioImage} alt={folderName} />
      </Col>
    )
  })
}

const Gallery = ({ location, data }) => {
  const images = data?.allFile.nodes.filter(node =>
    node.relativePath.includes(location.state?.folderName)
  )
  return (
    <Layout>
      <Container>
        <h2 className="text-center py-5">{location.state?.folderName}</h2>
        <Container>
          <Row>{getImages(images?.slice(0, 3))}</Row>
          <Row>{getImages(images?.slice(3, 6))}</Row>
          <Row>{getImages(images?.slice(6, 9))}</Row>
          <Row>{getImages(images?.slice(9, 12))}</Row>
          <Row>{getImages(images?.slice(12, 15))}</Row>
          <Row>{getImages(images?.slice(15, 18))}</Row>
        </Container>
      </Container>
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
