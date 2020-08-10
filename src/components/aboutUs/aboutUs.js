import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { useInView } from "react-intersection-observer"

import "./aboutUs.scss"

const AboutUs = () => {
  const { aboutMe } = useStaticQuery(graphql`
    query {
      aboutMe: file(relativePath: { eq: "about-me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [ref, inView, entry] = useInView({
    triggerOnce: true,
  })

  return (
    <section className="about-me">
      <BackgroundImage
        fluid={aboutMe.childImageSharp.fluid}
        className="about-me-bg"
      />
      <div className="about-me-content">
        <h4>about us</h4>
        <h2>what we have done</h2>
        <p>
          At GYM, we’re about real fitness. Our no-nonsense, results-driven
          culture was built on a history rooted in weightlifting culture. With
          our award winning designs and culture, THE GYM has effortlessly became
          an internationally recognized brand known for its commitment to
          health, strength, and fitness. Today, we continue to be one of the
          most celebrated fitness brands in the world.
        </p>
        <div className="bars" ref={ref}>
          <div className="bar-container">
            <div className="bar-info">
              <p>Body building</p> <span>80%</span>
            </div>
            <div className="bar">
              <span className={inView ? "bodyBuilder" : null}></span>
            </div>
          </div>
          <div className="bar-container">
            <div className="bar-info">
              <p>Training</p> <span>85%</span>
            </div>
            <div className="bar">
              <span className={inView ? "training" : null}></span>
            </div>
          </div>
          <div className="bar-container">
            <div className="bar-info">
              <p>Fitness</p> <span>75%</span>
            </div>
            <div className="bar">
              <span className={inView ? "fitness" : null}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
