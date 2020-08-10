import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SectionTitle from "../sectionTitle"

import "./testimonial.scss"

const Testimonial = () => {
  const { testOne, testTwo, testThree } = useStaticQuery(graphql`
    query {
      testOne: file(relativePath: { eq: "test-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      testTwo: file(relativePath: { eq: "test-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      testThree: file(relativePath: { eq: "test-three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const testimonials = [
    {
      img: testOne,
      testimonial:
        "I have been a member at GYM since it opened about 2 years ago and can say it’s the best 24hr gym in the area. I have previously been a member of other local gyms and found GYM to be the best. The owner and staff are all very friendly and professional. This gym has easy parking / access. As well as great facilities / equipment and small group training sessions.",
      name: "Jenny Rothman",
      stars: 5,
    },
    {
      img: testTwo,
      testimonial:
        "To turn a lifelong couch potato into a gym rat is no small feat. Teresa is terrific. She suggests exercise routines that are individualized and challenging, but not more than you can handle. Also, she is a very interesting -- and interested -- person.",
      name: "Oliver Marchioro",
      stars: 5,
    },
    {
      img: testThree,
      testimonial:
        "Awesome gym, and awesome trainers. Worth every penny. Being a former athlete turned consultant, I quickly gained weight and stopped working out. I’ve been working out with my trainer…for about 6 months now, and am quickly regaining my strength, as well as have dropped some noticeable weight as well! The gym is very clean, and the other clients are very friendly!",
      name: "Ritchie Sateriale",
      stars: 4,
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <section className="testimonial">
      <div className="test-container">
        <SectionTitle smallTxt="testimonial" title="our client says" />
        <div className="test-slider">
          <Slider {...settings}>
            {testimonials.map(({ img, testimonial, name, stars }) => {
              let starArray = []
              for (let i = 0; i < stars; i++) {
                starArray.push(
                  <li>
                    <FontAwesomeIcon icon={faStar} className="test-icon" />
                  </li>
                )
              }
              return (
                <div>
                  <div className="testimonial-card">
                    <Img
                      fluid={img.childImageSharp.fluid}
                      className="test-img"
                    />
                    <p>{testimonial}</p>
                    <h5>{name}</h5>
                    <ul>{starArray}</ul>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
