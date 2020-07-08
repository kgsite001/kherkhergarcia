import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import GoogleApiWrapper from '../components/map'
import SEO from "../components/seo"
import map from '../images/map_placeholder.png'



const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="main-flex_container">

            <section className="contact-top_container responsive-flex padding-medium">
                <div className="contact-top_copy">
                    <h3>We are ready to help you right now.</h3>
                    <p className="section_paragraph">Contact us even if you aren't ready to hire someone and just need some basic questions answered. Ask us anything.</p>
                </div>
                <div className="contact-top_form">
                    <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />

                        <label htmlFor="name">Name</label>
                        <br></br>
                        <input type="text" name="name" id="name" />
                        <br></br>


                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" name="email" id="email" />
                        <br></br>


                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" name="phone" id="phone" />
                        <br></br>

                        <p>How did you get hurt? (pick one)</p>
                        <input type="radio" id="vehicle-accident" name="Why did you get hurt?" value="Vehicle Accident"></input>
                        <label for="Vehicle Accident">Vehicle Accident</label><br></br>
                        <input type="radio" id="at-work" name="Why did you get hurt?" value="At Work"></input>
                        <label for="At Work">At Work</label><br></br>
                        <input type="radio" id="medicine-or-drug" name="Why did you get hurt?" value="Medicine or Drug"></input>
                        <label for="Medicine or Drug">Medicine or Drug</label><br></br>
                        <input type="radio" id="something-else" name="Why did you get hurt?" value="Something Else"></input>
                        <label for="Something Else">Something Else</label>
                        <br></br>

                        <p>Call or Text (pick one)</p>
                        <input type="radio" id="call" name="call-or-text" value="male"></input>
                        <label for="call">Call</label><br></br>
                        <input type="radio" id="text" name="call-or-text" value="female"></input>
                        <label for="text">Text</label><br></br>
                        <br></br>

                        <ul className="actions">
                            <li>
                                <input type="submit" value="Send Message" className="special" />
                            </li>
                            <li>
                                <input type="reset" value="Clear" />
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
            <section className="contact-bottom_container responsive-flex padding-medium">
                <div className="contact-bottom_copy">
                    <h3 className="black">Kherkher Garcia LLP</h3>
                    <address>
                        <h1>Houston Office</h1>
                        <p>801 Travis Street, Suite 2175</p>
                        <p>Houston, Texas 77002</p>
                        <br></br>
                        <p>Phone: <a>(713) 333-1030</a></p>
                        <p>Fax: (713) 333-1029</p>
                        <a>contactus@kherkhergarcia.com</a>
                    </address>
                </div>
                <div className="contact-bottom_map">
                    <GoogleApiWrapper />
                </div>
            </section>
        </div>
    </Layout >
)

export default ContactPage
