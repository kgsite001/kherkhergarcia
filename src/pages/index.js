import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import couple from '../images/Couple.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-flex_container">
      <section className="hero-menu_container">
        <span role="img" aria-label="Couplle speaking with an attorney."></span>
        <div className="hero-menu_copy">
          <h1>We are with you all the way.</h1>
          <h2>Our reputation is built on our commitment to service and a strong record of success</h2>
          <button>Ask Us Anything ➝</button>
        </div>
      </section>
      <section className="stories_container">
        <h1>The moment you are injured, the clock starts. The longer you wait, the harder your case gets.</h1>
        <p>Ruby's day started like any other. We approach our clients like family. Our team is dedicated to putting your needs
          first and helping you achieve the best possible result for you. Our focus is your justice.</p>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  </Layout>
)

export default IndexPage
