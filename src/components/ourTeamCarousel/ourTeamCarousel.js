import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

import OurTeamTitle from "../ourTeamTitle"
import TeamCard from "../teamCard"

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

  return (
    <section className="team-carousel">
      <div className="team-carousel-container">
        <OurTeamTitle />
        <div className="carousel">
          <Slider {...settings}>
            <TeamCard
              img={trainerOne.childImageSharp.fluid}
              name="Elliott Mulindi"
            />
            <TeamCard
              img={trainerTwo.childImageSharp.fluid}
              name="Carolyne Lacy"
            />
            <TeamCard
              img={trainerThree.childImageSharp.fluid}
              name="Nicolle Petrarch"
            />
            <TeamCard
              img={trainerFour.childImageSharp.fluid}
              name="Stuart Doney"
            />
            <TeamCard
              img={trainerFive.childImageSharp.fluid}
              name="Miles Markham"
            />
            <TeamCard
              img={trainerSix.childImageSharp.fluid}
              name="Susann Housum"
            />
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default OurTeamCarousel
