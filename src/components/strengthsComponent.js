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
    <div id="strengths" className="strengths container">
			<div className="strengths inner-container">
					<div className="strength-grid">
						<div className="strength network">
							<div className="strength-icon">
								<img alt="logo" src={network}/>
							</div>
							<div className="strength-description">NETWORK</div>
						</div>
						<div className="strength industry">
							<div className="strength-icon">
								<img alt="logo" src={industry}/>
							</div>
							<div className="strength-description">INDUSTRY EXPERT</div>
						</div>						
						<div className="strength industry">
							<div className="strength-icon">
								<img alt="logo" src={technology}/>
							</div>
							<div className="strength-description">BEST-IN-className TECHNOLOGY</div>
						</div>						
						<div className="strength industry">
							<div className="strength-icon">
								<img alt="logo" src={execution}/>
							</div>
							<div className="strength-description">PROVEN EXECUTION CAPABILITIES</div>
						</div>						
						<div className="strength industry">
							<div className="strength-icon">
								<img alt="logo" src={global}/>
							</div>
							<div className="strength-description">GLOBAL REACH</div>
						</div>
						<div className="strength industry">
							<div className="strength-icon">
								<img alt="logo" src={knowhow}/>
							</div>
							<div className="strength-description">LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE</div>
						</div>
						<div className="logo-strength">
							<img alt="logo" src={logo}/>
						</div>
					</div>
			</div>				
		</div>
  )
}

export default Strengths