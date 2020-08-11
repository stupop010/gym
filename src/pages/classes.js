import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHero from "../components/pageHero"
import ClassesTimeTable from "../components/classesTimeTable"

const ClassesPage = () => (
  <Layout>
    <SEO title="Classes" />
    <PageHero page="classes" />
    <ClassesTimeTable />
  </Layout>
)

export default ClassesPage
