import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fontAwesomeIcons } from "../helpers/fontawesomeicons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(fontAwesomeIcons)

const IndexPage = () => <Layout></Layout>

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
