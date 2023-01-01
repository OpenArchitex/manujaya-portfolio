import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Col, Container, Row } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"

library.add(fontAwesomeIcons)

const getFeaturedImages = featuredImages => {
  return featuredImages?.map(featuredImage => {
    const image = featuredImage?.childImageSharp?.gatsbyImageData
    const folderName = featuredImage.relativePath.split("/")[0]
    return (
      <Col md className="pb-4">
        <Link to={`/gallery/${folderName}`}>
          <Container className="featureImageContainer">
            <GatsbyImage
              className="featureImage"
              image={image}
              alt={folderName}
            />
            <Container className="featureImageTitle">{folderName}</Container>
          </Container>
        </Link>
      </Col>
    )
  })
}

const IndexPage = ({ data }) => {
  const featuredImages = data?.allFile.nodes
  return (
    <Layout>
      <Container className="py-5 text-center">
        <Row>{getFeaturedImages(featuredImages.slice(0, 3))}</Row>
        <Row>{getFeaturedImages(featuredImages.slice(3, 6))}</Row>
      </Container>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const featuredImageQuery = graphql`
  query FeaturedImageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "portfolio-images" }
        relativePath: { regex: "//1.jpg/" }
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

export default IndexPage
