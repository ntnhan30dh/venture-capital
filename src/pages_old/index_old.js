import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
import Philosophy from "../components/philosophy"
import Strengths from "../components/strengthsComponent"
import { Link } from "gatsby"




const IndexPage = () => {
  return (
    <Layout>
		<Slideshow/>	
		<Portfolio/>
		<Team/>
		<Philosophy/>
		<Strengths/>
		<footer id="footer" className="footer container">
        <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link>
			<div className="footer-footer">
			Copyright© 2021 Delivery Hero SE<br/>
			<br/>
			Here impressum and disclaimers as by law.
		</div>
        </footer> 
    </Layout>

)}

export default IndexPage
