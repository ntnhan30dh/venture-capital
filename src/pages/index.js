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
    </Layout>

)}

export default IndexPage
