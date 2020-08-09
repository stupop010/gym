import React, { useRef, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

import OurTeamTitle from "../ourTeamTitle/ourTeamTitle"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ourTeamCarousel.scss"

const OurTeamCarousel = () => {
  const {
    trainerOne,
    trainerTwo,
    trainerThree,
    trainerFour,
    trainerFive,
    trainerSix,
  } = useStaticQuery(graphql`
    query {
      trainerOne: file(relativePath: { eq: "trainer-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainerTwo: file(relativePath: { eq: "trainer-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainerThree: file(relativePath: { eq: "trainer-three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainerFour: file(relativePath: { eq: "trainer-four.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainerFive: file(relativePath: { eq: "trainer-five.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      trainerSix: file(relativePath: { eq: "trainer-six.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const Trainer = ({ name }) => {
    return (
      <div className="trainer-txt">
        <div>
          <h5>{name}</h5>
          <p>gym trainer</p>
        </div>
      </div>
    )
  }

  return (
    <section className="team-carousel">
      <div className="team-carousel-container">
        <OurTeamTitle />
        <div className="carousel">
          <Slider {...settings}>
            <div className="trainer">
              <Img fluid={trainerOne.childImageSharp.fluid} className="slide" />
              <Trainer name="stuart" />
            </div>

            <div className="trainer">
              <Img fluid={trainerTwo.childImageSharp.fluid} className="slide" />
              <Trainer name="stuart" />
            </div>

            <div className="trainer">
              <Img
                fluid={trainerThree.childImageSharp.fluid}
                className="slide"
              />
              <Trainer name="stuart" />
            </div>

            <div className="trainer">
              <Img
                fluid={trainerFour.childImageSharp.fluid}
                className="slide"
              />
              <Trainer name="stuart" />
            </div>

            <div className="trainer">
              <Img
                fluid={trainerFive.childImageSharp.fluid}
                className="slide"
              />
              <Trainer name="stuart" />
            </div>

            <div className="trainer">
              <Img fluid={trainerSix.childImageSharp.fluid} className="slide" />
              <Trainer name="stuart" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default OurTeamCarousel
