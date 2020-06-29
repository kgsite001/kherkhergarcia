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
          <Link to="/"><img className="icon_small" src={Home}></img></Link>
          <li><Link to="/about">About Us</Link></li>
          <li><a href="/#aboutus">What We Do</a></li>
          <li><a href="/#results">Results</a></li>
          <li><a href="/#reviews">What Our Clients Say</a></li>
          <li><a>What You Need to Know</a></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li><a>Espanol</a></li>
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
