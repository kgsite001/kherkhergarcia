import React from "react"
import Carousel from 'react-bootstrap/Carousel';

import { Link } from 'gatsby'

export default class newsCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    Slide 1
            </Carousel.Item>
                <Carousel.Item>
                    Slide 2
            </Carousel.Item>
                <Carousel.Item>
                    Slide 3
            </Carousel.Item>
            </Carousel>
        )
    }
}

/*
<section className="news_container padding-medium">
<h2>Latest News</h2>
<div className="news-story_flexcontainer responsive-flex">
    {data.allContentfulBlogPost.edges.map((edge, i) => {
        if (i < 3) {
            return (
                <div className="news-story">
                    <h4 className="news-story_title">{edge.node.title}</h4>
                    <p className="news-story_excerpt paragraph-small">GALVESTON, TX - Two people were hospitalized yesterday when an oil storage tank they were working near exploded. Galveston spokesperson Marissa Barnett reports that both individuals are expected to survive.</p>
                    <Link to={`/blog/${edge.node.slug}`}><p className="paragraph-smaller-red">Read More ➝</p></Link>
                </div>
            )
        }
    })}
</div>
</section>
*/