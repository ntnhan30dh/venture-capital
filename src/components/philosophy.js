import React from "react"
import icon_d from "../images/icon-d.svg"
import icon_x from "../images/icon-x.svg"
import icon_c from "../images/icon-c.svg"
import icon_v from "../images/icon-v.svg"
import d_mobile from "../images/d-mobile.svg"
import x_mobile from "../images/x-mobile.svg"
import c_mobile from "../images/c-mobile.svg"
import v_mobile from "../images/v-mobile.svg"
import Link from "gatsby-link"


const Philosophy = () => {
  return (
    
		<div id="philosophy" className="philosophy container">
			<div className="philosophy inner-container">
				<div className="section-title"><h2>Investment Philosophy</h2></div>
					<div className="philosophy-grid">
						<div className="philosophy-element">
							<div className="philosophy-icon">
								<img alt="logo" className="nomobile" src={icon_d}/>
								<img alt="logo" className="mobile" src={d_mobile}/>
							</div>
							<div className="philosophy-text">
							ON DEMAND</div>
						</div>
						<div className="philosophy-element">
							<div className="philosophy-icon">
								<img alt="logo" className="nomobile" src={icon_x}/>
								<img alt="logo" className="mobile" src={x_mobile}/></div>
							<div className="philosophy-text">
								FOOD &amp; KITCHEN 2.0</div>
						</div>	
						<div className="philosophy-element">
							<div className="philosophy-icon">
								<img alt="logo" className="nomobile" src={icon_v}/>
								<img alt="logo" className="mobile" src={v_mobile}/></div>
							<div className="philosophy-text">AI ENABLED TECHNOLOGY</div>
						</div>
						<div className="philosophy-element">
							<div className="philosophy-icon">
								<img alt="logo" className="nomobile" src={icon_c}/>
								<img alt="logo" className="mobile" src={c_mobile}/></div>
							<div className="philosophy-text">
							FINTECH</div>
						</div>
					</div>
				<Link to="/vision" href="vision.html"><div className="link">EXPLORE OUR PHILOSOPHY &gt;</div></Link>
			</div>				
		</div>
  )
}

export default Philosophy