const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const staffTemplate = path.resolve('./src/templates/staff.js')
  const res = await graphql(`
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

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  }
  )

  res.data.allContentfulStaffProfile.edges.forEach((edge) => {
    createPage({
      component: staffTemplate,
      path: `/staff/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      }
    })
  }
  )
}