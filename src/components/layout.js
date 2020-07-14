/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/index.scss"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div  id="wrapper" class="wrapper" >{children}</div>
        <footer id="footer" class="footer container">
        <a href="contact.html"><div class="cta-button">
			FIND OUT MORE
				</div></a>
			<div class="footer-footer">
			Copyright© 2020 Delivery Hero SE<br/>
			<br/>
			Here impressum and disclaimers as by law.
		</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
