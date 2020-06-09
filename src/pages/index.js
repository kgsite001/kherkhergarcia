import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import couple from '../images/Couple.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-flex_container">
      <section className="hero-menu_container">
        <span role="img" aria-label="Man in business attire points to document in front of a seated woman in business attire. Another man in business attire sits in the background."></span>
        <div className="hero-menu_copy">
          <h1>We are with you all the way.</h1>
          <h2>Our reputation is built on our commitment to service and a strong record of success</h2>
          <button>Ask Us Anything ➝</button>
        </div>
      </section>
      <section className="testimonials_container">
      <div className="testimonials_media">
          <p>Video here</p>
        </div>
        <div className="testimonials_copy">
          <h1 className="section_title">Testimonials</h1>
          <h2 className="section_subtitle">The moment you are injured, the clock starts. The longer you wait, the harder your case gets.</h2>
          <p className="section_paragraph">Ruby's day started like any other. We approach our clients like family. Our team is dedicated to putting your needs
          first and helping you achieve the best possible result for you. Our focus is your justice.</p>
          <button>See Ruby's Story ➝</button>
        </div>
        
      </section>
      <section className="results_container">
        <h1 className="section_title">Results</h1>
        <h2 className="section_subtitle">Over 40 years of experience in the courtroom</h2>
        <p className="section_paragraph">Not every lawyer has been through a trial. We know how to try cases. Our expertise allows us to get recoveries from the most complex and challenging cases. We work on cases all across the country.</p>
        <div className="results-table_container">
          <p>table</p>
          <p>table</p>
          <p>table</p>
        </div>
        <button>See More Victories ➝</button>
      </section>
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
