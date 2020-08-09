import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import WhyUs from "../components/whyUs"
import OurClasses from "../components/ourClasses"
import HomeBanner from "../components/homeBanner"
import PricePlan from "../components/pricePlan"
import Gallery from "../components/gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <WhyUs />
    <OurClasses />
    <HomeBanner />
    <PricePlan />
    <Gallery />
  </Layout>
)

export default IndexPage
