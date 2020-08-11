import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import ContactUs from "../components/contactUs"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <PageHero page="contact" />
    <ContactUs />
  </Layout>
)

export default ContactPage
