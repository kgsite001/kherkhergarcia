import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import kherkherProfile from '../images/kherkher_profile.png'
import garciaProfile from '../images/garcia_profile.png'
import steveTeam from '../images/steve_team.png'

const AboutPage = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulStaffProfile (sort: {fields:publishedDate, order:DESC}) {
      edges {
        node {
          profileImage {
            resize {
              src
            }
          }
          firstName
          lastName
          title
          slug
        }
      }
  }
}
  `)
    return (
        <Layout>
            <SEO title="About" />
            <div className="main-flex_container">
                <section className="aboutpage-introduction_container padding-small responsive-flex">
                    <div className="aboutpage-kg_profiles">
                        <div>
                            <img src={kherkherProfile} alt="Jesus Garcia"></img>
                            <h5>Steve Kherkher</h5>
                            <h6>Founding Partner</h6>
                        </div>
                        <div>
                            <img src={garciaProfile} alt="Steve Kherkher"></img>
                            <h5>Jesus Garcia, Jr.</h5>
                            <h6>Founding Partner</h6>
                        </div>
                    </div>
                    <div className="aboutpage-intro_copy">
                        <h3>Our focus is your justice.</h3>
                        <p>Experience matters. We have presented cases in over 900 jury trials. And we’ve settled hundreds more. We have been very successful because we fight for you like you are our family—and we know how to win. Our record speaks for itself.</p>
                        <p>We fight for you against all kinds of companies that have acted recklessly and negligently. Trucking, offshore, oil and energy, global manufacturers, maritime shipping, and others.</p>
                    </div>
                </section>
                <section className="aboutpage-mission_container responsive-flex padding-medium">
                    <div>
                        <h3>Our Mission.</h3>
                        <p>This paragraph we talk about what exactly drives us as a law firm and the way we demand excellence for it.</p>
                        <p>We fight for you against all kinds of companies that have acted recklessly and negligently. Trucking, offshore, oil and energy, global manufacturers, maritime shipping, and others.</p>
                    </div>
                    <div>
                        <img src={steveTeam} alt="Steve Kherkher speaking with the team at Kherkher Garcia."></img>
                    </div>
                </section>
                <section className="aboutpage-attorneys_container padding-large">
                    <h3>Meet Our Team:</h3>
                    <div className="aboutpage-attorneys_directory">
                        {data.allContentfulStaffProfile.edges.map((edge) => {
                            return (
                                <Link to={`/staff/${edge.node.slug}`}>
                                    <div className="aboutpage-attorneys_profile">
                                        <img src={edge.node.profileImage.resize.src}></img>
                                        <h5 className="bold-blue">{edge.node.firstName} {edge.node.lastName}</h5>
                                        <h6>{edge.node.title}</h6>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </section>
            </div >
        </Layout >
    )
}

export default AboutPage
