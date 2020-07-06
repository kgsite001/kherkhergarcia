import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      childContentfulBlogPostBodyRichTextNode {
        json
      }
      title
      subtitle
      category
      author
      publishedDate(formatString: "MMMM DD, YYYY")
    }
  }`




const Blog = (props) => {
  return (
    <Layout>
      <div className="main-flex_container">
        <div className="blog-post_container responsive-flex padding-medium">
          <section className="blog-post_main">
            <h2>{props.data.contentfulBlogPost.title}</h2>
            <h3>{props.data.contentfulBlogPost.subtitle}</h3>
            <p className="blog-post_main-category">{props.data.contentfulBlogPost.category}</p>
            <p className="blog-post_main-date">{props.data.contentfulBlogPost.publishedDate}</p>
            <p className="blog-post_main-author">{props.data.contentfulBlogPost.author}</p>
            <p>{documentToReactComponents(props.data.contentfulBlogPost.childContentfulBlogPostBodyRichTextNode.json)}</p>
          </section>
          <section className="blog-post_sidebar_container">
            <div>
              <h4>Related Topics</h4>
              <h4>Related Topics</h4>
              <button>Ask Us Anything ➝</button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Blog