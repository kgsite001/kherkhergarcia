import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


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
        description
      }
      firstName
      lastName
      title
      childContentfulStaffProfileBioRichTextNode {
        json
      }
      phone
      email
      childContentfulStaffProfileEducationRichTextNode {
        json
      }
      childContentfulStaffProfileCourtAdmissionsRichTextNode {
        json
      }
      childContentfulStaffProfileHonorsDistinctionsRichTextNode {
        json
      }
      professionalAffiliationsMemberships {
        json
      }
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
          <img src={props.data.contentfulStaffProfile.profileImage.resize.src} alt={props.data.contentfulStaffProfile.profileImage.description || ''}></img>
          <div>
            <p>Phone:</p>
            <a href={`tel:${props.data.contentfulStaffProfile.phone}`}>{props.data.contentfulStaffProfile.phone}</a>
            <p>Email:</p>
<a href={`mailto:${props.data.contentfulStaffProfile.email}`}>{props.data.contentfulStaffProfile.email}</a>
            <br></br>
            <button>Ask Us Anything ➝</button>
          </div>
        </div>
        <div className="partner-profile_main">
          <h1>{props.data.contentfulStaffProfile.firstName} {props.data.contentfulStaffProfile.lastName}</h1>
          <h2>{props.data.contentfulStaffProfile.title}</h2>
          <p >{documentToReactComponents(props.data.contentfulStaffProfile.childContentfulStaffProfileBioRichTextNode.json)}</p>
          <h3>Education</h3>
          <h3>Professional Affiliations</h3>
        </div>
      </section>
    </div>
  </Layout>
)

export default Staff
