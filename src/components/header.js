import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/styles.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul className="nav-flex_container">
        <li>Logo</li>
        <li>Our Team</li>
        <li>Results</li>
        <li>What Our Clients Say</li>
        <li>What You Should Know</li>
        <li>Contact Us</li>
        <li>Espanol</li>
        <li>Button</li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
