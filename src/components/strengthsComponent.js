import React from "react"
//import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
//import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"
import network from "../images/network.svg"
import industry from "../images/industry.svg"
import technology from "../images/technology.svg"
import execution from "../images/execution.svg"
import global from "../images/global.svg"
import knowhow from "../images/knowhow.svg"
import logo from "../images/logo.svg"

const Strengths = () => {
//   const data = useStaticQuery(graphql`
    
//   `)
  return (
    <div id="strengths" class="strengths container">
			<div class="strengths inner-container">
					<div class="strength-grid">
						<div class="strength network">
							<div class="strength-icon">
								<img src={network}/>
							</div>
							<div class="strength-description">NETWORK</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src={industry}/>
							</div>
							<div class="strength-description">INDUSTRY EXPERT</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src={technology}/>
							</div>
							<div class="strength-description">BEST-IN-CLASS TECHNOLOGY</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src={execution}/>
							</div>
							<div class="strength-description">PROVEN EXECUTION CAPABILITIES</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src={global}/>
							</div>
							<div class="strength-description">GLOBAL REACH</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src={knowhow}/>
							</div>
							<div class="strength-description">LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE</div>
						</div>
						<div class="logo-strength">
							<img src={logo}/>
						</div>
					</div>
			</div>				
		</div>
  )
}

export default Strengths