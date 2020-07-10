import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/styles.css'

import Logo from '../images/logo_top.svg'
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
          <li><Link to="/" id="logo-link_header"><img className="icon_large" src={Logo}></img></Link></li>
          <li><Link to="/about" className="paragraph-smaller">About Us</Link></li>
          <li><a className="paragraph-smaller" href="/#aboutus">What We Do</a></li>
          <li><a className="paragraph-smaller" href="/#results">Our Results</a></li>
          <li><a className="paragraph-smaller" href="/#reviews">What Our Clients Say</a></li>
          <li><a className="paragraph-smaller">Common Questions</a></li>
          <li><Link to="/contact" className="paragraph-smaller">Contact Us</Link></li>
          <li>
            <button className="call_button">
              <p>Call or Text 24/7:</p>
              <address>(888) 123-4567</address>
              <p>Ayuda en Español</p>
            </button>
          </li>

        </ul>
      </div>
    </nav>
    <Link to="/"><img className="mobile_logo" src={Logo}></img></Link>
    <button className="mobile_call_button">
      <p>Call or Text 24/7:</p>
      <address>(888) 123-4567</address>
      <p>Ayuda en Español</p>
    </button>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
