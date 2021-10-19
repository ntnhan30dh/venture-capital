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
import Contact2 from "../components/contact2"
import Header2 from "../components/header2"

//import CookieConsent from "react-cookie-consent"

const IndexPage = () => {

  const fontSize = {
    "h1" : "text-4xl sm:text-5xl",
    "h2" : "text-2xl sm:text-24px",
    "p" : "text-lg xxsm:text-xl sm:text-2xl",
    "p2" : "text-lg  "

  }
  return (
    <Layout>
      {/* <Slideshow/>	 */}
      {/* <Mission /> */}
      
      {/* <Header2 /> */}
      <Mission2 size={fontSize}/>
      {/* <Story /> */}
      <Story2  size={fontSize}/>
      {/* <Focus /> */}
      <Focus2 size={fontSize} />
      {/* <Strengths /> */}
      <Strengths2 size={fontSize} />
      {/* <Team/> */}
      <Team2 size={fontSize}/>
      {/* <Portfolio /> */}
      <Portfolio2 size={fontSize} />
      {/* <News /> */}
      <News2 size={fontSize} />
      {/* <ContactComponent /> */}
      <Contact2 size={fontSize}/>

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
