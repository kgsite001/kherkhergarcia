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
      <section className="about_container">
        <div className="about-main_container">
          <div className="about-main_copy">
            <h1 className="section_title">About Us</h1>
            <h2 className="section_subtitle">We are relentless in our effort to seek justice for our clients."</h2>
            <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-main_media">
            <p>Video</p>
          </div>
        </div>
        <div className="about-sub_container">
          <div className="about-sub_copy">
            <h1>Experienced Trial Lawyers</h1>
            <p>Our experience is great. We havve worked on cases aroudn the country for years and we're prepared to get you through this.</p>
          </div>
          <div className="about-sub_copy">
            <h1>Service Comes First</h1>
            <p>We are focused first on our clients</p>
          </div>
          <div className="about-sub_copy">
            <h1>Ask Us Anything</h1>
            <p>We want you to make the best decision for you and your family Call one of our lawyers for a free consultation and get the answers you need to choose the right law firm.</p>
          </div>
        </div>
      </section>
      <section className="reviews_container">
        <h1 className="section_title">Reviews</h1>
        <h2 className="section_subtitle">What our clients say about us:</h2>
        <p className="section_paragraph">Better service means better recovery for our clients.</p>
        <div className="reviews_google">
          <p>Review</p>
          <p>Review</p>
        </div>
        <button>Read More Reviews ➝</button>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  </Layout>
)

export default IndexPage
