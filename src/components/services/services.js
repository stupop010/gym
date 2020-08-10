import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SectionTitle from "../sectionTitle"

import "./services.scss"

const Services = () => {
  const {
    servicesOne,
    servicesTwo,
    servicesThree,
    servicesFour,
  } = useStaticQuery(graphql`
    query {
      servicesOne: file(relativePath: { eq: "services-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      servicesTwo: file(relativePath: { eq: "services-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      servicesThree: file(relativePath: { eq: "services-three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      servicesFour: file(relativePath: { eq: "services-four.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="services">
      <div className="services-container">
        <SectionTitle smallTxt="what we do?" title="push your limits forward" />
        <div className="service-grid">
          <div>
            <Img
              fluid={servicesOne.childImageSharp.fluid}
              className="service-img"
            />
          </div>
          <div className="service-text service-left">
            <h3>Personal Training</h3>
            <p>
              Get the most from your gym time. Our one-on-one sessions pair you
              with a coach who will guide you to the workouts that fit your
              goals.
            </p>
          </div>
          <div>
            <Img
              fluid={servicesTwo.childImageSharp.fluid}
              className="service-img"
            />
          </div>
          <div className="service-text service-left">
            <h3>Group Training</h3>
            <p>
              Team workouts will increase your effectiveness by providing
              accountability, and you’ll find yourself pushing harder in an
              energy-filled atmosphere.
            </p>
          </div>
          <div className="service-text service-right">
            <h3>Strength</h3>
            <p>
              Strength training, also called weight training or resistance
              training, is an important part of any fitness routine. It helps
              make you stronger and also builds muscle endurance.
            </p>
          </div>
          <div>
            <Img
              fluid={servicesThree.childImageSharp.fluid}
              className="service-img"
            />
          </div>
          <div className="service-text service-right">
            <h3>Bodybuilding</h3>
            <p>
              Whether you’re into bodybuilding, power lifting, strength training
              or just getting started, these workouts and tips will help you
              reach your goals.
            </p>
          </div>
          <div>
            <Img
              fluid={servicesFour.childImageSharp.fluid}
              className="service-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
