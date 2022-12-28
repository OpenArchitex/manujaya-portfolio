import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

library.add(fontAwesomeIcons)

const IndexPage = () => {
  const test = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "portfolio-images" } }) {
          nodes {
            relativePath
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Container className="py-5 text-center">
        <Row>
          <Col md className="pb-4">
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Christmas/1.jpg"
                alt="Christmas"
              />
              <Container className="featureImageTitle">Christmas</Container>
            </Container>
          </Col>
          <Col md className="pb-4">
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Easter/1.jpg"
                alt="Easter"
              />
              <Container className="featureImageTitle">Easter</Container>
            </Container>
          </Col>
          <Col md className="pb-4">
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Family sessions/35.jpg"
                alt="Family Sessions"
              />
              <Container className="featureImageTitle">
                Family Sessions
              </Container>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col md className="pb-4">
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Graduation sessions/29.jpg"
                alt="Graduation Sessions"
              />
              <Container className="featureImageTitle">
                Graduation Sessions
              </Container>
            </Container>
          </Col>
          <Col md className="pb-4">
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Headshots/3.jpg"
                alt="Headshots"
              />
              <Container className="featureImageTitle">Headshots</Container>
            </Container>
          </Col>
          <Col md>
            <Container className="featureImageContainer">
              <StaticImage
                className="featureImage"
                src="../images/portfolio-images/Maternity/1.jpg"
                alt="Maternity"
              />
              <Container className="featureImageTitle">Maternity</Container>
            </Container>
          </Col>
        </Row>
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

export default IndexPage
