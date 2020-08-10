import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import Services from "../components/services"
import HomeBanner from "../components/homeBanner"
import PricePlan from "../components/pricePlan"

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <PageHero page="services" />
      <Services />
      <HomeBanner />
      <PricePlan />
    </Layout>
  )
}

export default ServicesPage
