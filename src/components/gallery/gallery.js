import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Modal from "../modal"

import "./gallery.scss"

const Gallery = () => {
  const {
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
  } = useStaticQuery(graphql`
    query {
      galleryOne: file(relativePath: { eq: "gallery-one.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      galleryTwo: file(relativePath: { eq: "gallery-two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      galleryThree: file(relativePath: { eq: "gallery-three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      galleryFour: file(relativePath: { eq: "gallery-four.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      galleryFive: file(relativePath: { eq: "gallery-five.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallerySix: file(relativePath: { eq: "gallery-six.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imgs = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
  ]

  const [show, setShow] = useState(false)
  const [img, setImg] = useState(null)

  const toggleModal = img => {
    document.body.classList.add("modal-open")
    setShow(true)
    setImg(img)
  }

  const handleClose = () => {
    document.body.classList.remove("modal-open")
    setShow(false)
  }

  return (
    <>
      <section className="gallery">
        <div className="gallery-grid">
          {imgs.map(img => {
            return (
              <div className="img-container" onClick={() => toggleModal(img)}>
                <Img
                  fluid={img.childImageSharp.fluid}
                  className="gallery-img"
                />
                <FontAwesomeIcon icon={faImage} className="gallery-icon" />
              </div>
            )
          })}
        </div>
      </section>
      <Modal show={show} handleClose={handleClose}>
        {show && (
          <Img fluid={img.childImageSharp.fluid} className="gallery-img" />
        )}
      </Modal>
    </>
  )
}

export default Gallery
