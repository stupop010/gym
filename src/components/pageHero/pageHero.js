import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./pageHero.scss"

const PageHero = ({ page }) => {
  const { pageHero } = useStaticQuery(graphql`
    query {
      pageHero: file(relativePath: { eq: "page-hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section>
      <BackgroundImage
        fluid={pageHero.childImageSharp.fluid}
        className="page-hero"
      >
        <div className="page-hero-overlay">
          <h1>{page}</h1>
          <div className="breadCrumb">
            <Link to="/">Home</Link> &gt; <span>{page}</span>
          </div>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default PageHero
