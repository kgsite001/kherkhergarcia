import React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const StaffPage = () => {
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
          name
          title
          slug
        }
      }
  }
}
  `)

  return (
    <Layout>
      <div className="main-flex_container">
        <ol>
          {data.allContentfulStaffProfile.edges.map((edge) => {
            return (
              <li>
                <h2><Link to={`/staff/${edge.node.slug}`}>{edge.node.name}</Link></h2>
                <p>{edge.node.title}</p>
                <h2><Link to={`/staff/${edge.node.slug}`}>{edge.node.name}</Link></h2>
                <p>{edge.node.title}</p>
                <h2><Link to={`/staff/${edge.node.slug}`}>{edge.node.name}</Link></h2>
                <p>{edge.node.title}</p>
                <h2><Link to={`/staff/${edge.node.slug}`}>{edge.node.name}</Link></h2>
                <p>{edge.node.title}</p>
                <h2><Link to={`/staff/${edge.node.slug}`}>{edge.node.name}</Link></h2>
                <p>{edge.node.title}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default StaffPage