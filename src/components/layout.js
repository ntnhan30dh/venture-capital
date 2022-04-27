/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"
import "semantic-ui-css/semantic.min.css"
import "../styles/global.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import logo from '../images/logo_white.png'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const [nudge, setNudge] = useState(true)
  // const toggleNudge = () => {
  //   setNudge(!nudge)
  //   console.log("nudge", nudge)
  // }
  // const wrapNudge = nudge ? "nudge" : ""

  let [menuActive, setmenuActive] = useState(false)
  const toggleMenu = () => {
    setmenuActive(!menuActive)
  }

  return (
    <div className="relative">
      <Header toggleMenu={toggleMenu} menuState={menuActive} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: 0,
        }}
      >
        <div id="wrapper" className={`wrapper overflow-hidden	`}>
          {children}
        </div>
      </div>
      <footer id="footer" className=" bg-dhBlack text-white px-4 lg:px-24 pt-10 lg:pt-12 pb-6 ">
        <div className="max-w-7xl mx-auto">
        <div className="top md:flex items-center md:mb-10">
          <div className="left md:w-1/2">
            <div className="w-36 lg:w-52">
              <img src={logo} alt="logo" className="w-full" />
            </div>
          </div>
          <div className="right flex w-3/4 justify-between mt-8 md:mt-0  mb-8 md:mb-0 md:w-1/2 ">
            <div className="md:w-1/2">
              <h4 className="h4">
              Get in Touch
              </h4>
              <p className="body2 mt-2">info@dhventures.vc</p>
            </div>
            <div className="md:w-1/2">
              <h4 className="h4 mb-1">Follow us on</h4>
              <a href="https://www.linkedin.com/company/dx-ventures/about/" className="w-5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.4773 20H0.330726V6.64714H4.4773V20ZM2.40151 4.82571C1.07575 4.82571 0 3.72714 0 2.40143C0 1.76453 0.253016 1.15372 0.703387 0.703362C1.15376 0.253007 1.76459 0 2.40151 0C3.03844 0 3.64927 0.253007 4.09964 0.703362C4.55001 1.15372 4.80303 1.76453 4.80303 2.40143C4.80303 3.72714 3.72728 4.82571 2.40151 4.82571ZM19.9964 20H15.8591V13.5C15.8591 11.9507 15.8277 9.96429 13.7033 9.96429C11.5476 9.96429 11.2168 11.6471 11.2168 13.3886V20H7.07454V6.64714H11.0511V8.46857H11.109C11.6626 7.41929 13.0148 6.31214 15.032 6.31214C19.2285 6.31214 20 9.07572 20 12.665V20H19.9964Z" fill="white"/>
</svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom relative md:flex flex-row-reverse justify-between md:py-5">
          <div className=" absolute top-0 w-full h-0.5 bg-white opacity-20 "></div>
        <div className="flex justify-between body3 pt-8 md:pt-0 md:w-462px">
            <Link to="/imprint">Imprint</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Security</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/privacy">Terms</Link>
          </div>
          <p className="body3 text-center mt-6 md:mt-0">
          DH Ventures GmbH I © Copyright 2022
          </p>
        
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
