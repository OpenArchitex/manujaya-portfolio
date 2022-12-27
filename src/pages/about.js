import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { Container } from "react-bootstrap"

library.add(fontAwesomeIcons)

const About = () => (
  <Layout>
    <Container></Container>
  </Layout>
)

export const Head = () => <Seo title="About" />

export default About
