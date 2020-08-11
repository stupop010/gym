import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import OurTeam from "../components/ourTeam"

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="Our Team" />
      <PageHero page="our team" />
      <OurTeam />
    </Layout>
  )
}

export default TeamPage
