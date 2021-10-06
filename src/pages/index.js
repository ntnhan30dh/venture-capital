import React from "react"
import Layout from "../components/layout"
// import Slideshow from "../components/slideshow"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
// import Philosophy from "../components/philosophy"
import Strengths from "../components/strengthsComponent"
//import { Link } from "gatsby"

 import Mission from "../components/mission"
import Mission2 from "../components/mission2"
 import Story from "../components/story"
import Story2 from "../components/story2"
 import Focus from "../components/focus"
import Focus2 from "../components/focus2"
import News from "../components/newsComponent"
import ContactComponent from "../components/contactComponent"

//import CookieConsent from "react-cookie-consent"

const IndexPage = () => {
  return (
    <Layout>
      {/* <Slideshow/>	 */}
      <Mission />
      {/* <Mission2 /> */}
      <Story />
      {/* <Story2 /> */}
      <Focus />
      {/* <Focus2 /> */}
      <Strengths />
      <Team />
      <Portfolio />
      <News />
      <ContactComponent />

      {/* <Philosophy/> */}
  
      {/* <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        debug={true}
      >
        <span className="cookie_consent">
          {" "}
          We use cookies to ensure you get the best experience on our website.
          {"  "}
          <a href="/disclaimer">Learn more</a>
        </span>
      </CookieConsent> */}
    </Layout>
  )
}

export default IndexPage
