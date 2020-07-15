import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import hamburger from "../images/hamburger.svg"
import logo from "../images/logo.svg"

class Header extends React.Component{
	state = { showMenu: false }
	  toggleMenu = () => {
		  console.log(this.state.showMenu)
		this.setState({
		  showMenu: !this.state.showMenu
		})
	  }
	render() {
		const menuActive = this.state.showMenu ? 'is-inactive' : '';
		return (
  <nav id="navbar" className="nav" >
		<div id="logo-cont" class="logo-cont cont">
			<picture id="logo" class="logo">
				<Link to="/"><img src={logo} height="45" alt="logo"/>
				</Link></picture>
			<div id="nav-menu" className={`nav-menu ${menuActive}`}>
				<Link to="/team"><div id="navteam" class="nav-element">TEAM</div></Link>
				<Link to="/portfolio"><div id="navportfolio" class="nav-element">PORTFOLIO</div></Link>
				<Link to="/strengths"><div id="navstrengths" class="nav-element">OUR STRENGTHS</div></Link>
				<Link to="/vision"><div id="navvision" class="nav-element">OUR VISION</div></Link>
				<Link to="/contact">
					<div id="navcontact" class="nav-element">CONTACT</div></Link>
			</div>
			<img id="hamburger" class="hamburger" src={hamburger} onClick={this.toggleMenu}/>
		</div>
	</nav>
		)
	}
}



export default Header
