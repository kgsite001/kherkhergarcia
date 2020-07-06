import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (sort: {fields:publishedDate, order:DESC}) {
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM DD, YYYY")
        }
      }
    }
  }
  `)

    return (
        <Layout>
          <p>The logs serve as a weekly snapshot of content I've found inspiring, entertaining, or thoughtful. Within you'll find a collection of articles, songs, images, tools and quotes. If you'd like to be notified of updates, feel free to subscribe to <a href="/rss.xml">my RSS feed.</a></p>
            <ol> 
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li>
                            <h2><Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link></h2>
                            <p>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage