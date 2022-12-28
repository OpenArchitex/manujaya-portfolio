import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"

library.add(fontAwesomeIcons)

const About = () => (
  <Layout>
    <Container class="py-5">
      <h2 className="text-center">
        Award-winning photographer based in St.John's, Newfoundland.
      </h2>
      <Container className="py-5">
        <p>
          As a member of St.John’s small but vibrant creative community, I think
          I bring a different perspective to my work. Whether I’m photographing
          the exceptional landscapes of the island, capturing the glamorous
          moments of your special occation, I always strive to put the story
          first.
        </p>

        <p>
          Please contact me directly for projects or to inquire about purchasing
          my work.
        </p>

        <Container className="py-4 px-0">
          <h4>Get in touch.</h4>
          <Link href="mailto:masen0222@gmail.com">masen0222@gmail.com</Link>
        </Container>
      </Container>
    </Container>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
