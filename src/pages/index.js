import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import scale from "../images/scale.svg"
import handshake from "../images/handshake.svg"
import phone from "../images/phone.svg"

import award1 from '../images/award-top_25.png'
import award2 from '../images/award-ntl_top_100.png'
import award3 from '../images/award-super_lawyer.png'
import award4 from '../images/award-association_for_justice.png'
import award5 from '../images/award-top_percent.png'
import award6 from '../images/award-million_dollar.png'
import award7 from '../images/award-top_40.png'


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
      <section className="testimonials_container flex-layout">
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
        <div className="results-table_container flex-layout">
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
            </div>
          </table>
        </div>
        <button>See More Victories ➝</button>
      </section>
      <section className="about_container">
        <div className="about-main_container flex-layout">
          <div className="about-main_copy">
            <h1 className="section_title">About Us</h1>
            <h2 className="section_subtitle">We are relentless in our effort to seek justice for our clients."</h2>
            <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-main_media">
            <p>Video</p>
          </div>
        </div>
        <div className="about-sub_container flex-layout">
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
      <section className="questions_container flex-layout">
        <div className="questions_introduction">
          <h1 className="section_title">Common Questions</h1>
          <h2 className="section_subtitle">Remember to ask these questions.</h2>
          <p className="section_paragraph">When you are injured and need help it is important to get answers that can help you receive the justice you deserve. These are frequently asked questions we receive from our clients.</p>
          <button>See More Common Questions ➝</button>
        </div>
        <div className="questions_list">
          <p>Question</p>
          <p>Question</p>
          <p>Question</p>
          <p>Question</p>
          <p>Question</p>
        </div>
      </section>
      <section className="news_container">
        <h1 className="section_title">Latest News</h1>
        <div className="news-story_flexcontainer flex-layout">
          <div className="news-story">
            <h1 className="news-story_title">Two injured in Galveston oil explosion</h1>
            <p className="news-story_excerpt">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="news-story_link">Read More ➝</p>
          </div>
          <div className="news-story">
            <h1 className="news-story_title">Two injured in Galveston oil explosion</h1>
            <p className="news-story_excerpt">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="news-story_link">Read More ➝</p>
          </div>
          <div className="news-story">
            <h1 className="news-story_title">Two injured in Galveston oil explosion</h1>
            <p className="news-story_excerpt">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
            <p className="news-story_link">Read More ➝</p>
          </div>
        </div>
        <button>See More Updates ➝</button>
      </section>
      <section className="ask_container">
        <div className="ask-main_container">
          <h1 className="section_title">Ask Us Anything</h1>
          <h2 className="section_subtitle">Let us help you find a way forward..</h2>
          <p className="section_paragraph">Use our guides to select the lawyer that is right for you.</p>
        </div>
        <div className="ask-sub_container flex-layout">
          <div className="ask-sub_info">
            <img src={scale} alt="Scale icon"></img>
            <h1 className="ask-sub_info-title">Know Your Rights</h1>
            <p className="ask-sub_info-description">Understand what options you have so you can take the right steps forward.</p>
            <p className="ask-sub_info-link">Read More ➝</p>
          </div>
          <div className="ask-sub_info">
            <img src={handshake} alt="Handshake icon"></img>
            <h1 className="ask-sub_info-title">Know Your Rights</h1>
            <p className="ask-sub_info-description"> Understand what options you have so you can take the right steps forward.</p>
            <p className="ask-sub_info-link">Download a Free Guide ➝</p>
          </div>
          <div className="ask-sub_info">
            <img src={phone} alt="Cell phone texting icon"></img>
            <h1 className="ask-sub_info-title">Know Your Rights</h1>
            <p className="ask-sub_info-description">Understand what options you have so you can take the right steps forward.</p>
            <p className="ask-sub_info-link">Ask Us Anything ➝</p>
          </div>
        </div>
      </section>
      <section className="awards_container">
        <h1 className="section_title">Nationally Recognized & Awarded</h1>
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
