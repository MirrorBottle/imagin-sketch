/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  Box
} from "@chakra-ui/core"
import Header from "./header"
import Footer from "./footer"
import "../assets/css/layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box px={{ md: 24, sm: 3, base: 3 }} py={1} pb={10} minHeight="70vh" bg="teal.500" flex alignItems="center">
        <Box bg="white" style={{ boxShadow: "5px 5px 10px rgba(0,0,0, .1), -5px -5px 10px rgba(0,0,0, .1)", marginTop: "-4rem" }} w="100%" p={8} rounded="lg" border="0px" mt={-12} boxShadow="xl">
          {children}
        </Box>
      </Box>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
