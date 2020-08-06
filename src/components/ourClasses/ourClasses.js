import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./ourClasses.scss"

const OurClasses = () => {
  const {
    classesOne,
    classesTwo,
    classesThree,
    classesFour,
    classesFive,
  } = useStaticQuery(graphql`
    query {
      classesOne: file(relativePath: { eq: "classes-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      classesTwo: file(relativePath: { eq: "classes-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      classesThree: file(relativePath: { eq: "classes-three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      classesFour: file(relativePath: { eq: "classes-four.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      classesFive: file(relativePath: { eq: "classes-five.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const Text = ({ smallTxt, title }) => {
    return (
      <div className="classes-txt">
        <div>
          <p>{smallTxt}</p>
          <h5>{title}</h5>
        </div>
        <a>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    )
  }

  return (
    <section className="our-classes">
      <div className="classes-container">
        <div className="classes-title">
          <p>our classes</p>
          <h2>what we can offer</h2>
        </div>
        <div className="classes-card-container">
          <div className="card card-small">
            <div className="card-overflow">
              <Img
                fluid={classesOne.childImageSharp.fluid}
                className="classes-img"
                alt="weight lost"
              />
              <Text smallTxt="cardio" title="weight lost" />
            </div>
          </div>
          <div className="card card-small">
            <div className="card-overflow">
              <Img
                fluid={classesTwo.childImageSharp.fluid}
                className="classes-img"
                alt="yoga"
              />
              <Text smallTxt="strength" title="yoga" />
            </div>
          </div>
          <div className="card card-small">
            <div className="card-overflow">
              <Img
                fluid={classesThree.childImageSharp.fluid}
                className="classes-img"
                alt="training with kettlebells"
              />
              <Text smallTxt="strength" title="kettlebell power" />
            </div>
          </div>
          <div className="card card-lg">
            <div className="card-overflow">
              <Img
                fluid={classesFour.childImageSharp.fluid}
                className="classes-img"
                alt="weight lifting"
              />
              <Text smallTxt="strength" title="weightlifting" />
            </div>
          </div>
          <div className="card card-lg">
            <div className="card-overflow">
              <Img
                fluid={classesFive.childImageSharp.fluid}
                className="classes-img"
                alt="two people boxing"
              />
              <Text smallTxt="training" title="boxing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClasses
