import React from "react"
import icon_d from "../images/icon-d.svg"
import icon_x from "../images/icon-x.svg"
import icon_c from "../images/icon-c.svg"
import icon_v from "../images/icon-v.svg"
//import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
//import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"

const Philosophy = () => {
//   const data = useStaticQuery(graphql`
    
//   `)
  return (
    
		<div id="philosophy" class="philosophy container">
			<div class="philosophy inner-container">
				<div class="section-title"><h2>Investment Philosophy</h2></div>
					<div class="philosophy-grid">
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src={icon_d}/>
								<img class="mobile" src={"images/d-mobile.svg"}/>
							</div>
							<div class="philosophy-text">
							ON DEMAND</div>
						</div>
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src={icon_x}/>
								<img class="mobile" src="images/x-mobile.svg"/></div>
							<div class="philosophy-text">
								FOOD &amp; KITCHEN 2.0</div>
						</div>	
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src={icon_v}/>
								<img class="mobile" src="images/v-mobile.svg"/></div>
							<div class="philosophy-text">AI ENABLED TECHNOLOGY</div>
						</div>
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src={icon_c}/>
								<img class="mobile" src="images/c-mobile.svg"/></div>
							<div class="philosophy-text">
							FINTECH</div>
						</div>
					</div>
				<a href="vision.html"><div class="link">EXPLORE OUR PHILOSOPHY &gt;</div></a>
			</div>				
		</div>
  )
}

export default Philosophy