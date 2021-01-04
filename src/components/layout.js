/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"
import "../styles/index.scss"
import "semantic-ui-css/semantic.min.css";
import { Link } from "gatsby"


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

  const [nudge, setNudge] = useState(true);
  const toggleNudge=()=>{
    setNudge(!nudge)
    console.log("nudge",nudge)
  }
  const wrapNudge = nudge? 'nudge' : '';

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} toggleNudgeHandle={toggleNudge}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: 0,
        }}
      >
      <div  id="wrapper" className={`wrapper ${wrapNudge}`} >{children}</div>
      </div>
      <footer id="footer" className="footer container">
        {/* <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link> */}
        <div className="footer-footer">
          Copyright© 2020 Delivery Hero SE
          <br />
          <br />
          Here impressum and disclaimers as by law.
          <br />
          <br />
          <div className="buttons">
            <Link to="/imprint">Imprint</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
