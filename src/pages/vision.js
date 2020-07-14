import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

import dpurple from "../images/dpurple.svg"
import xpurple from "../images/xpurple.svg"
import cpurple from "../images/cpurple.svg"
import vpurple from "../images/vpurple.svg"

const VisionPage = () => {
	const data = useStaticQuery(graphql`
	{
		allWordpressAcfPages{
		  edges {
			node{
			  wordpress_id
			  acf {
				text
			  }
			}
		  }
		}
		  }
	`)
	return(
  <Layout>
  <div class="vision section-title"><h2>Investment Philosophy</h2>
						<p>{data.allWordpressAcfPages.edges.filter(i=>i.node.wordpress_id===97)[0].node.acf.text} </p>
	  </div>
		<div id="vision" class="vision-page container">
			<div class=" inner-container">

					<div class="philosophy-grid">
						<div class="philosophy-element">
							<div class="philosophy-icon">
								
							<div class="philosophy-text">
							ON DEMAND</div><img src={dpurple}/>
							</div>
							<div class="philosophy-desc">
								<strong>Enabling the <br/>
								On-Demand Economy
								</strong><br/><br/>

									• Food / Grocery Tech<br/>
• Other On-Demand
(Online to offline)<br/>
• Mobility<br/>
• Catering<br/>
							</div>
						</div>
						<div class="philosophy-element">
							<div class="philosophy-text">
								FOOD &amp; KITCHEN 2.0
							</div>
							<div class="philosophy-icon">
								<img src={xpurple}/></div>
							<div class="philosophy-desc">
								<strong>Outstanding
									Tech-Capabilities</strong><br/><br/>

									• Logistics &amp; Autonomous Delivery<br/>
									• Robotics<br/>
									• Supply-Chain Optimization<br/>
							</div>
						</div>	
						<div class="philosophy-element">
							
							<div class="philosophy-text">AI-ENABLED TECHNOLOGY</div>
							<div class="philosophy-icon">
							<img src={vpurple}/>
							</div>
							<div class="philosophy-desc">
								<strong>Shaping How We Consume Food</strong><br/><br/>

									• Food 2.0: Meat Substitutes<br/>
• Next Gen. Drinks<br/>
• Agri-tech<br/>
• Restaurant Procurement<br/>
• Restaurant Reviews<br/>
• Cloud kitchen and new kitchen concepts<br/>
• Packaging<br/>
							</div>
						</div>
						<div class="philosophy-element">
							
							<div class="philosophy-text">
							FINTECH
							</div>
							<div class="philosophy-icon">
    <img src={cpurple}/></div>
							<div class="philosophy-desc">
								<strong>At The Forefront of the Fintech Revolution
</strong><br/><br/>

									• Mobile Banking<br/>
• P2P Lending<br/>
• POS Systems<br/>
• Wallet &amp; Loyalty<br/>
• Blockchain<br/>
								</div>
						</div>
					</div>
			</div>				
		</div>
  </Layout>
)}

export default VisionPage
