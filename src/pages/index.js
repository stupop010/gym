import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import WhyUs from "../components/whyUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <WhyUs />
  </Layout>
)

export default IndexPage
