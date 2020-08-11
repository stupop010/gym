import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TeamCard from "../teamCard"
import OurTeamTitle from "../ourTeamTitle"

import "./ourTeam.scss"
import SocialLinks from "../socialLinks/socialLinks"

const OurTeam = () => {
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

  return (
    <section className="our-team">
      <div className="our-team-container">
        <OurTeamTitle />
        <div className="our-team-grid">
          <TeamCard
            img={trainerOne.childImageSharp.fluid}
            name="Elliott Mulindi"
          >
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>

          <TeamCard img={trainerTwo.childImageSharp.fluid} name="Carolyne Lacy">
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>

          <TeamCard
            img={trainerThree.childImageSharp.fluid}
            name="Nicolle Petrarch"
          >
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>

          <TeamCard img={trainerFour.childImageSharp.fluid} name="Stuart Doney">
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>

          <TeamCard
            img={trainerFive.childImageSharp.fluid}
            name="Miles Markham"
          >
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>

          <TeamCard img={trainerSix.childImageSharp.fluid} name="Susann Housum">
            <div className="our-team-social">
              <SocialLinks />
            </div>
          </TeamCard>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
