import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import kherkherProfile from '../images/kherkher_profile.png'
import garciaProfile from '../images/garcia_profile.png'
import steveTeam from '../images/steve_team.png'
import attorney from '../images/moises.png'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="main-flex_container">
            <section className="aboutpage-introduction_container flex-layout">
                <div className="aboutpage-kg_profiles">
                    <div>
                        <img src={kherkherProfile}></img>
                        <h2>Steve Kherkher</h2>
                        <p>Founding Partner</p>
                    </div>
                    <div>
                        <img src={garciaProfile}></img>
                        <h2>Jesus Garcia, Jr.</h2>
                        <p>Founding Partner</p>
                    </div>
                </div>
                <div className="aboutpage-intro_copy">
                    <h1 className="section_subtitle">Our focus is your justice.</h1>
                    <p className="section_paragraph">Experience matters. We have presented cases in over 900 jury trials. And we’ve settled hundreds more. We have been very successful because we fight for you like you are our family—and we know how to win. Our record speaks for itself.</p>
                    <p className="section_paragraph">We fight for you against all kinds of companies that have acted recklessly and negligently. Trucking, offshore, oil and energy, global manufacturers, maritime shipping, and others.</p>
                </div>
            </section>
            <section className="aboutpage-mission_container flex-layout">
                <div>
                    <h1 className="section_subtitle">Our Mission.</h1>
                    <p className="section_paragraph">This paragraph we talk about what exactly drives us as a law firm and the way we demand excellence for it.</p>
                    <p className="section_paragraph">We fight for you against all kinds of companies that have acted recklessly and negligently. Trucking, offshore, oil and energy, global manufacturers, maritime shipping, and others.</p>
                </div>
                <div>
                    <img src={steveTeam}></img>
                </div>
            </section>
            <section className="aboutpage-attorneys_container">
                <h1 className="section_subtitle">Meet Our Team:</h1>
                <div className="aboutpage-attorneys_directory">
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                    <div aboutpage-attorneys_profile>
                        <img src={attorney}></img>
                    </div>
                </div>
            </section>

        </div>
    </Layout>
)

export default AboutPage
