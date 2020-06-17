import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="main-flex_container">

            <section className="contact-top_container responsive-flex">
                <div className="contact-top_copy">
                    <h2 className="section_subtitle">We are ready to help you right now.</h2>
                    <p className="section_paragraph">Contact us even if you aren't ready to hire someone and just need some basic questions answered. Ask us anything.</p>
                </div>
                <div className="contact-top_form">
                    <p>Insert form here.</p>
                </div>
            </section>
            <section className="contact-bottom_container responsive-flex">
                <div className="contact-bottom_copy">
                    <h2 className="section_subtitle">Kherkher Garcia LLP</h2>
                    <address>
                        <h3 className="section_paragraph">Houston Office</h3>
                        <p>801 Travis Street, Suite 2175</p>
                        <p>Houston, Texas 77002</p>
                        <br></br>
                        <p>Phone: <a>(713) 333-1030</a></p>
                        <p>Fax: (713) 333-1029</p>
                        <a>contactus@kherkhergarcia.com</a>
                    </address>
                </div>
                <div className="contact-bottom_map">
                    <p>Map here</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default ContactPage
