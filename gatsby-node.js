const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/story-template.jsx')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                            title
                            date
                            author
                            image
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}
