import React, { useState } from "react"
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"

import ContactListItem from "../contactListItem"

import "./contactUs.scss"

const initialState = {
  name: "",
  email: "",
  comment: "",
}

const map = `https://maps.googleapis.com/maps/api/staticmap?center=51.7525841,-1.2584783&zoom=18&size=1170x400&key=${process.env.MAP_KEY}`

const ContactUs = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Send Form Input!!!")
    setValues(initialState)
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-details">
          <h5>contact us</h5>
          <h2>get in touch</h2>
          <ul>
            <ContactListItem
              icon={faMapMarkerAlt}
              iconColor="#f36100"
              iconBg="#363636"
            >
              333 Middle Winchendon Rd, Rindge,
              <br /> NH 03461
            </ContactListItem>
            <ContactListItem
              icon={faMobileAlt}
              iconColor="#f36100"
              iconBg="#363636"
            >
              125-711-811 125-668-886
            </ContactListItem>
            <ContactListItem
              icon={faEnvelope}
              iconColor="#f36100"
              iconBg="#363636"
            >
              Support@gym.com
            </ContactListItem>
          </ul>
        </div>
        <div className="contact-form">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Comment"
              value={values.comment}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-map">
        <img src={map} alt="Map of our location in oxford" />
      </div>
    </section>
  )
}

export default ContactUs
