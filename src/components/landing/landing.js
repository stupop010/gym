import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import "./landing.scss"

const Landing = () => {
  const [slideCounter, setSlideCounter] = useState(0)

  const { backgroundHeroOne, backgroundHeroTwo } = useStaticQuery(graphql`
    query {
      backgroundHeroOne: file(relativePath: { eq: "gym-hero-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      backgroundHeroTwo: file(relativePath: { eq: "gym-hero-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const backgrounds = [backgroundHeroOne, backgroundHeroTwo]

  const prev = () => {
    setSlideCounter(slideCounter === 0 ? 1 : 0)
  }

  const next = () => {
    setSlideCounter(slideCounter === 1 ? 0 : 1)
  }

  return (
    <section className="landing">
      <BackgroundImage
        fluid={backgrounds[slideCounter].childImageSharp.fluid}
        className="hero-bg"
      >
        <div className="overlay">
          <div className="title">
            <div className="row">
              <p>shape your body</p>
              <h1>
                be <strong>strong</strong> train hard
              </h1>
              <a>get info</a>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={prev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={next}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Landing
