import React from "react"
//import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
//import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"

const Strengths = () => {
//   const data = useStaticQuery(graphql`
    
//   `)
  return (
    <div id="strengths" class="strengths container">
			<div class="strengths inner-container">
					<div class="strength-grid">
						<div class="strength network">
							<div class="strength-icon">
								<img src="images/network.svg"/>
							</div>
							<div class="strength-description">NETWORK</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/industry.svg"/>
							</div>
							<div class="strength-description">INDUSTRY EXPERT</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/technology.svg"/>
							</div>
							<div class="strength-description">BEST-IN-CLASS TECHNOLOGY</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/execution.svg"/>
							</div>
							<div class="strength-description">PROVEN EXECUTION CAPABILITIES</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/global.svg"/>
							</div>
							<div class="strength-description">GLOBAL REACH</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/knowhow.svg"/>
							</div>
							<div class="strength-description">LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE</div>
						</div>
						<div class="logo-strength">
							<img src="images/logo.svg"/>
						</div>
					</div>
			</div>				
		</div>
  )
}

export default Strengths