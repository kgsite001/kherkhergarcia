import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import quotationMark from "../images/quotation_mark.svg"
import scale from "../images/scale.svg"
import handshake from "../images/handshake.svg"
import phone from "../images/phone.svg"

import review1 from '../images/review1.png'
import review2 from '../images/review2.png'


import award1 from '../images/award-top_25.png'
import award2 from '../images/award-ntl_top_100.png'
import award3 from '../images/award-super_lawyer.png'
import award4 from '../images/award-association_for_justice.png'
import award5 from '../images/award-top_percent.png'
import award6 from '../images/award-million_dollar.png'
import award7 from '../images/award-top_40.png'

import videoPlaceholder from '../images/video_placeholder.png'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-flex_container">
      <div></div>
      <section className="hero-menu_container">
        <span role="img" aria-label="Man in business attire points to document in front of a seated woman in business attire. Another man in business attire sits in the background."></span>
        <div className="hero-menu_copy padding-medium">
          <h1 className="header-top">We are with you all the way.</h1>
          <p className="paragraph-large">We are trial lawyers dedicated to seeking justice for our clients. Our reputation is built on our commitment to service and a strong record of success.</p>
          <button>Ask Us Anything ➝</button>
        </div>
      </section>
      <section className="testimonials_container responsive-flex padding-medium">
        <div className="testimonials_media">
          <img src={videoPlaceholder}></img>
        </div>
        <div className="testimonials_copy">
          <h2 className="header-uppercase-grey">Testimonials</h2>
          <h3 className="header-grey">In a split second, Ruby's life changed forever.</h3>
          <p>Ruby's day started like any other. We approach our clients like family. Our team is dedicated to putting your needs
          first and helping you achieve the best possible result for you. Our focus is your justice.</p>
          <button>See Ruby's Story ➝</button>
        </div>

      </section>
      <section id="results" className="results_container padding-medium">
        <h2 className="header-uppercase-grey">Results</h2>
        <h3 className="header-blue">Over 40 years of experience in the courtroom</h3>
        <p className="section_paragraph">Not every lawyer has been through a trial. We know how to try cases. Our expertise allows us to get recoveries from the most complex and challenging cases. We work on cases all across the country.</p>
        <div className="results-table_container responsive-flex">
          <table className="results-table">
            <tr className="results-table_won">
              <th>We Won:</th>
              <td>$46,500,000</td>
            </tr>
            <tr className="results-table_offer">
              <th>Pre-Trial Offer:</th>
              <td>$1,065,000</td>
            </tr>
            <div className="results-table_details">
              <tr>
                <th>Case:</th>
                <td>Monsanto</td>
              </tr>
              <tr>
                <th>Attorney:</th>
                <td>Steve Kherkher</td>
              </tr>
              <tr>
                <th>Summary:</th>
                <td>Monsanto used cancer-causing chemicals in their product</td>
              </tr>
              <p className="paragraph-small-red">Read More ➝</p>
            </div>

          </table>
          <table className="results-table">
            <tr className="results-table_won">
              <th>We Won:</th>
              <td>$46,500,000</td>
            </tr>
            <tr className="results-table_offer">
              <th>Pre-Trial Offer:</th>
              <td>$1,065,000</td>
            </tr>
            <div className="results-table_details">
              <tr>
                <th>Case:</th>
                <td>Monsanto</td>
              </tr>
              <tr>
                <th>Attorney:</th>
                <td>Steve Kherkher</td>
              </tr>
              <tr>
                <th>Summary:</th>
                <td>Monsanto used cancer-causing chemicals in their product</td>
              </tr>
              <p className="paragraph-small-red">Read More ➝</p>

            </div>
          </table>
          <table className="results-table">
            <tr className="results-table_won">
              <th>We Won:</th>
              <td>$46,500,000</td>
            </tr>
            <tr className="results-table_offer">
              <th>Pre-Trial Offer:</th>
              <td>$1,065,000</td>
            </tr>
            <div className="results-table_details">
              <tr>
                <th>Case:</th>
                <td>Monsanto</td>
              </tr>
              <tr>
                <th>Attorney:</th>
                <td>Steve Kherkher</td>
              </tr>
              <tr>
                <th>Summary:</th>
                <td>Monsanto used cancer-causing chemicals in their product</td>
              </tr>
              <p className="paragraph-small-red">Read More ➝</p>

            </div>
          </table>

        </div>
        <button>See More Victories ➝</button>
      </section>
      <section  id="aboutus" className="about_container padding-medium">
        <div className="about-main_container responsive-flex">
          <div className="about-main_copy">
            <h2 className="header-uppercase-grey">About Us</h2>
            <h3 className="header-grey">We are relentless in our effort to seek justice for our clients."</h3>
            <img src={quotationMark}></img>
            <p className="about-main_copy-quote_attribution">- Steve Kherkher, Founding Partner</p>
            <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-main_media">
            <img src={videoPlaceholder}></img>
          </div>
        </div>
        <div className="about-sub_container responsive-flex">
          <div className="about-sub_copy">
            <h4 className="paragraph-medium_small blue-bold">Experienced Trial Lawyers</h4>
            <p className="paragraph-medium_small">Our experience is great. We havve worked on cases aroudn the country for years and we're prepared to get you through this.</p>
          </div>
          <div className="about-sub_copy">
            <h4 className="paragraph-medium_small blue-bold">Service Comes First</h4>
            <p className="paragraph-medium_small">We are focused first on our clients</p>
          </div>
          <div className="about-sub_copy">
            <h4 className="paragraph-medium_small blue-bold">Ask Us Anything</h4>
            <p className="paragraph-medium_small">We want you to make the best decision for you and your family Call one of our lawyers for a free consultation and get the answers you need to choose the right law firm.</p>
          </div>
        </div>
      </section>
      <section id="reviews" className="reviews_container padding-medium">
        <h2 className="header-uppercase-grey">Reviews</h2>
        <h3 className="header-grey">What our clients say about us:</h3>
        <p className="section_paragraph">Better service means better recovery for our clients.</p>
        <div className="responsive-flex">
          <img src={review1}></img>
          <img src={review2}></img>
        </div>
        <button>Read More Reviews ➝</button>
      </section>
      <section className="questions_container responsive-flex padding-medium">
        <div className="questions_introduction">
          <h2 className="header-uppercase-grey">Common Questions</h2>
          <h3 className="header-grey">Remember to ask these questions.</h3>
          <p className="section_paragraph">When you are injured and need help it is important to get answers that can help you receive the justice you deserve. These are frequently asked questions we receive from our clients.</p>
          <button>See More Common Questions ➝</button>
        </div>
        <div className="questions_list">
          <button>What is the first thing I should do after a workplace accident? </button>
          <label>▲</label>
          <button>Can I recover if I had a prior work injury?</button>
          <label>▲</label>

          <button>They offered me a settlement. Should I accept it?</button>
          <label>▲</label>

          <button>How much time do I have to file a lawsuit after a truck accident?</button>
          <label>▲</label>

          <button>They offered me a settlement. Should I accept it?</button>
          <label>▲</label>

        </div>
      </section>
      <section className="news_container padding-medium">
        <h2 className="header-uppercase-grey">Latest News</h2>
        <div className="news-story_flexcontainer responsive-flex">
          <div className="news-story">
            <h4 className="news-story_title paragraph-medium_small">Two injured in Galveston oil explosion</h4>
            <p className="news-story_excerpt paragraph-small">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="paragraph-small-red">Read More ➝</p>
          </div>
          <div className="news-story">
            <h4 className="news-story_title paragraph-medium_small">Two injured in Galveston oil explosion</h4>
            <p className="news-story_excerpt paragraph-small">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="paragraph-small-red">Read More ➝</p>
          </div>
          <div className="news-story">
            <h4 className="news-story_title paragraph-medium_small">Two injured in Galveston oil explosion</h4>
            <p className="news-story_excerpt paragraph-small">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="paragraph-small-red">Read More ➝</p>
          </div>
        </div>
        <button>See More Updates ➝</button>
      </section>
      <section className="ask_container padding-large">
        <div className="ask-main_container">
          <h2 className="header-uppercase-grey">Ask Us Anything</h2>
          <h3 className="header-blue">Let us help you find a way forward..</h3>
          <p className="section_paragraph">Use our guides to select the lawyer that is right for you.</p>
        </div>
        <div className="ask-sub_container responsive-flex">
          <div className="ask-sub_info">
            <img src={scale} alt="Scale icon"></img>
            <h4>Know Your Rights</h4>
            <p className="paragraph-medium_small">Understand what options you have so you can take the right steps forward.</p>
            <p className="paragraph-medium_small-red">Read More ➝</p>
          </div>
          <div className="ask-sub_info">
            <img src={handshake} alt="Handshake icon"></img>
            <h4>Know Your Rights</h4>
            <p className="paragraph-medium_small"> Understand what options you have so you can take the right steps forward.</p>
            <p className="paragraph-medium_small-red">Download a Free Guide ➝</p>
          </div>
          <div className="ask-sub_info">
            <img src={phone} alt="Cell phone texting icon"></img>
            <h4>Know Your Rights</h4>
            <p className="paragraph-medium_small">Understand what options you have so you can take the right steps forward.</p>
            <p className="paragraph-medium_small-red">Ask Us Anything ➝</p>
          </div>
        </div>
      </section>
      <section className="awards_container padding-small">
        <h1 className="header-uppercase-white">Nationally Recognized & Awarded</h1>
        <div className="awards-icon_container">
          <img src={award1} alt="Top 25 - Motor Vehicle Trial Lawyers"></img>
          <img src={award2} alt="The National Trial Lawyers - Top 100"></img>
          <img src={award3} alt="Rated by Super Lawyers"></img>
          <img src={award4} alt="American Association for Justice"></img>
          <img src={award5} alt="National Association of Distinguished Counsel - Top One Percent"></img>
          <img src={award6} alt="Million Dollar Advocates Forum"></img>
          <img src={award7} alt="The National Trial Lawyers - Top 40 Under 40"></img>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
