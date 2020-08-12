import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"
import Footer from "../components/footer"

import "./reset.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
