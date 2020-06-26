import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/styles.css'

import Logo from '../images/logo_top.png'
import Home from '../images/home-solid.svg'

const Header = () => (
  <header>
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox"></input>
        <span></span>
        <span></span>
        <span></span>
        <ul className="nav-flex_container" id="menu">
          <img className="icon_large" src={Logo}></img>
          <img className="icon_small" src={Home}></img>
          <li>About Us</li>
          <li>What We Do</li>
          <li>Results</li>
          <li>What Our Clients Say</li>
          <li>What You Need to Know</li>
          <li>Contact Us</li>
          <li>Espanol</li>
          <button className="call_button">
            <p>Call or Text 24/7:</p>
            <address>(888) 123-4567</address>
            <p>Ayuda en Espanol</p>
          </button>
        </ul>
      </div>
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
