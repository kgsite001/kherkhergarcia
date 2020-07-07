import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import attorney from '../images/moises.png'
import iconPhone from '../images/profile-icon_phone.svg'
import iconEmail from '../images/profile-icon_email.svg'
import iconAddress from '../images/profile-icon_address-book.svg'
import iconLinkedIn from '../images/profile-icon_linkedin.svg'

export const query = graphql`
  query ($slug: String!) {
    contentfulStaffProfile(slug: {eq: $slug}) {
          profileImage {
            resize {
              src
            }
          }
          name
          title
          slug
  }
}
  `

const Staff = (props) => (
    <Layout>
        <SEO title="Partner" />
        <div className="main-flex_container">
            <section className="partner-profile_container responsive-flex padding-small">
                <div className="partner-profile_sidebar">
                    <img src={attorney}></img>
                    <div>
                        <div className="partner-profile_icons">
                            <img src={iconPhone}></img>
                            <img src={iconEmail}></img>
                            <img src={iconAddress}></img>
                            <img src={iconLinkedIn}></img>
                        </div>
                        <button>Ask Us Anything ➝</button>
                    </div>
                </div>
                <div className="partner-profile_main">
                    <h1>Moises Morales</h1>
                    <h2>Partner</h2>
                    <p>Moises Morales maintains a litigation practice with an emphasis on personal injury and commercial claims. Mr. Morales grew up in rural west Texas and attended Fort Hancock High School. He received his Bachelor of Science in Political Science from Sul Ross State University, where he graduated summa cum laude. While attending Sul Ross, he worked full time and gained experienced in the legal career as a chief of staff for the local district attorney and then as a law clerk for a state representative. Mr. Morales later moved to Austin, to work the 82nd Legislative Session.</p>
                    <p>After this legislative experience, Mr. Morales moved to Houston to attend law school. He graduated from the University of Houston Law Center with a Doctor of Jurisprudence. During his law school career, Mr. Morales was the Chief Notes and Comments Editor of the Houston Business & Tax Journal. </p>
                    <p>Prior to joining the Kherkher Garcia, Mr. Morales gained valuable legal experience working as a law clerk in both Federal and State Courts, a Fortune 500 Company, and several civil litigation law firms. </p>
                    <p>Admitted to all courts of the State of Texas, 2015</p>
                    <p>Admitted to practice in the Southern District of Texas, 2018</p>
                    <h3>Education</h3>
                    <p>Education here</p>
                    <h3>Professional Affiliations</h3>
                    <p>Affiliations here</p>
                </div>
            </section>
        </div>
    </Layout>
)

export default Staff
