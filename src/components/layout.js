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
import Header2 from "./header2"
// import "./layout.css"
import "../styles/index.scss"
import "semantic-ui-css/semantic.min.css"
import "../styles/global.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

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

  const [nudge, setNudge] = useState(true)
  const toggleNudge = () => {
    setNudge(!nudge)
    console.log("nudge", nudge)
  }
  const wrapNudge = nudge ? "nudge" : ""

  let [menuActive, setmenuActive] = useState(false)
  const toggleMenu = () => {
    setmenuActive(!menuActive)
  }

  return (
    <div className="relative">
      {/* <Header siteTitle={data.site.siteMetadata.title} toggleNudgeHandle={toggleNudge}/> */}

      <Header2 toggleMenu={toggleMenu} menuState={menuActive} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: 0,
        }}
      >
        {/* <div id="wrapper" className={`wrapper ${wrapNudge}`}> */}
        <div id="wrapper" className={`wrapper overflow-hidden	`}>
          {children}
        </div>
      </div>
      <footer id="footer" className="footer c">
        {/* <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link> */}
        <div className="footer-footer">
          Copyright© 2021 Delivery Hero SE
          <br />
          <br />
          <div className="buttons">
            <Link to="/imprint">Imprint</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        //debug={true}
      >
        <span className="cookie_consent">
          {" "}
          We use cookies to ensure you get the best experience on our website.{" "}
          {/* <a href="/privacy/#cookie">Learn more</a> */}
          <Link to="privacy/#cookie">Learn more</Link>
        </span>
      </CookieConsent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
