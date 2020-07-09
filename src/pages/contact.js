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


/*

<form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                        <h1>Get a Free Consultation</h1>
                        <h2>Complete the form and our lawyers will contact you.</h2>
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />

                        <input type="text" required name="name" id="name" placeholder="Name" />
                        <br></br>


                        <input type="email" required name="email" id="email" placeholder="Email" />
                        <br></br>


                        <input type="text" name="phone" required id="phone" placeholder="Phone" />
                        <br></br>

                        <p>How did you get hurt? (pick one)</p>
                        <input type="radio" id="vehicle-accident" name="Why did you get hurt?" value="Vehicle Accident"></input>
                        <button type="button">Vehicle Accident</button>
                        <input type="radio" id="at-work" name="Why did you get hurt?" value="At Work"></input>
                        <button type="button">At Work</button><br></br>
                        <input type="radio" id="medicine-or-drug" name="Why did you get hurt?" value="Medicine or Drug"></input>
                        <button type="button">Medicine or Drug</button>
                        <input type="radio" id="something-else" name="Why did you get hurt?" value="Something Else"></input>
                        <button type="button">Something Else</button>
                        <br></br>


                        <p>How did you get hurt? (pick one)</p>
                        <input type="radio" id="vehicle-accident" name="Preferred Contact" value="Call"></input>
                        <button type="button">Call Me</button>
                        <input type="radio" id="at-work" name="Preferred Contact" value="Text"></input>
                        <button type="button">Text Me</button><br></br>
                        <br></br>

                        <input type="submit" value="Send Message" className="special" />

                    </form>
*/