import React from "react"
import Layout from "../components/layout"

import Mission from "../components/mission"
import Mission2 from "../components/mission2"
import Story from "../components/story"
import Story2 from "../components/story2"
import Focus from "../components/focus"
import Focus2 from "../components/focus2"
import Strengths from "../components/strengthsComponent"
import Strengths2 from "../components/strengths2"
 import Team from "../components/team"
import Team2 from "../components/team2"
 import Portfolio from "../components/portfolio"
import Portfolio2 from "../components/portfolio2"
import News from "../components/newsComponent"
import News2 from "../components/news2"
import ContactComponent from "../components/contactComponent"

//import CookieConsent from "react-cookie-consent"

const IndexPage = () => {
  return (
    <Layout>
      {/* <Slideshow/>	 */}
      {/* <Mission /> */}
      <Mission2 />
      {/* <Story /> */}
      <Story2 />
      {/* <Focus /> */}
      <Focus2 />
      {/* <Strengths /> */}
      <Strengths2 />
      {/* <Team/> */}
      <Team2/>
      {/* <Portfolio /> */}
      <Portfolio2 />
      {/* <News /> */}
      <News2 />
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
