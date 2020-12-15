import React from "react"
import Layout from "../components/layout"
// import Slideshow from "../components/slideshow"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
// import Philosophy from "../components/philosophy"
import Strengths from "../components/strengthsComponent"

import Mission from "../components/mission"
import Story from "../components/story"
import Focus from "../components/focus"
import News from "../components/newsComponent"
import ContactComponent from "../components/contactComponent"

//import CookieConsent from "react-cookie-consent"






const IndexPage = () => {
  return (
    <Layout>
		{/* <Slideshow/>	 */}
		<Mission/>	
		<Story/>	
		<Focus/>	
		<Strengths/>
		<Team/>
		<Portfolio/>
		<News/>
		<ContactComponent/>

		{/* <Philosophy/> */}
		<footer id="footer" className="footer container">
        {/* <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link> */}
			<div className="footer-footer">
			Copyright© 2020 Delivery Hero SE<br/>
			<br/>
			Here impressum and disclaimers as by law.
		</div>
        </footer> 
		{/* <CookieConsent
        location="bottom"
        buttonText="I AGREE"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
       // debug={true}
      >
        <span className="cookie_consent"> We use cookies needed to run the website and for analytical purposes.{" "}
          <a href="/">  
          More information
          </a>
          </span>
      </CookieConsent> */}
    </Layout>

)}

export default IndexPage
