import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./homeBanner.scss"

const HomeBanner = () => {
  const { banner } = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section className="banner">
      <BackgroundImage
        fluid={banner.childImageSharp.fluid}
        className="banner-bg"
      >
        <div className="banner-content">
          <h2>registration now to get more deals</h2>
          <p> where health, beauty and fitness meet.</p>
          <a>appointment</a>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default HomeBanner
