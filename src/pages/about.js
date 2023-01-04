import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { Container } from "react-bootstrap"
import { Script } from "gatsby"

library.add(fontAwesomeIcons)

const About = () => (
  <Layout>
    <Container className="pt-3">
      <h2 className="text-center">
        Award-winning photographer based in St.John's, Newfoundland.
      </h2>
      <Container className="py-5">
        <p>
          Hi there! I am Manujaya, a professional photographer specializing in
          graduation, family, and portrait photography. With 10+ years of
          experience in the business, I am the go-to photographer for unique
          events and auspicious occasions in St. John’s.
        </p>
        <p>
          Keeping a candid approach and adopting a photojournalistic style, I
          strive to capture genuine emotions and moments as they unfold like a
          story. It does not matter if I am shooting a wedding, portrait, or
          landscape; I love documenting each subject’s unique beauty and
          personality. Photography has always fascinated me because it allows me
          to meet so many beautiful families, especially children, and
          immortalize their smiles in frames forever. My portfolio comprises
          beautiful, dreamy, and timeless photographs, each of which evokes an
          emotion and tells a story.
        </p>
        <p>
          Whatever works for you works for me! Whether you need indoor photos,
          outdoor portraits, or headshots for your maternity, engagement,
          wedding, or formal business event, I have got you covered. In addition
          to my regular services, I offer mini-sessions for special occasions
          like Christmas, Easter, and fall. I am dedicated to delivering
          exceptional service at an affordable cost, with same-day sneak peeks
          of my work and final outputs within 2-3 business days. When I am not
          behind the camera, I can be found at my office in St. John’s, where I
          spend time enhancing the photographs of the precious moments of your
          life.
        </p>

        <Container className="py-4 px-0">
          <h4>Get in touch...</h4>
          <Script
            type="text/javascript"
            src="https://static.zcal.co/embed/v1/embed.js"
          ></Script>
          <div className="zcal-inline-widget">
            <a href="https://zcal.co/i/8w976dUD">
              Discovery Call - Schedule a meeting
            </a>
          </div>
        </Container>
      </Container>
    </Container>
  </Layout>
)

export const Head = () => (
  <>
    <Seo title="About" />
  </>
)

export default About
