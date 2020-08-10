import React from "react"
import Layout from "../components/layout"
import PageHero from "../components/pageHero/pageHero"
import SEO from "../components/seo"
import WhyUs from "../components/whyUs"
import AboutUs from "../components/aboutUs"
import OurTeamCarousel from "../components/ourTeamCarousel"
import HomeBanner from "../components/homeBanner"

const AboutUsPage = () => (
  <Layout>
    <SEO title="About us" />
    <PageHero page="about us" />
    <WhyUs />
    <AboutUs />
    <OurTeamCarousel />
    <HomeBanner />
  </Layout>
)

export default AboutUsPage
