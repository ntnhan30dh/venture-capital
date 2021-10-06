import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import hamburger from "../images/hamburger.svg"
import logo from "../images/logo.svg"

class Header extends React.Component {
  state = {
    showMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
    this.props.toggleNudgeHandle()
  }
  componentDidMount() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      this.toggleMenu()
    }
  }
  render() {
    let menuActive = this.state.showMenu ? "is-inactive" : ""

    return (
      <nav id="navbar" className="nav">
        <div id="logo-cont" className="logo-cont cont">
          <picture id="logo" className="logo">
            <Link to="/">
              <img src={logo} height="45" alt="logo" />
            </Link>
          </picture>
        </div>
        <div id="nav-menu" className={`nav-menu navMobile ${menuActive}`}>
          {/* <Link to="/team"><div id="navteam" class="nav-element">TEAM</div></Link>
				<Link to="/portfolio"><div id="navportfolio" class="nav-element">PORTFOLIO</div></Link>
				<Link to="/strengths"><div id="navstrengths" class="nav-element">OUR STRENGTHS</div></Link>
				<Link to="/vision"><div id="navvision" class="nav-element">OUR PHILOSOPHY</div></Link> */}
          <Link to="/#mission">
            <div id="navvision" class="nav-element">
              Mission
            </div>
          </Link>
          <Link to="/#story">
            <div id="navvision" class="nav-element">
              Story
            </div>
          </Link>
          <Link to="/#focus">
            <div id="navvision" class="nav-element">
              Focus
            </div>
          </Link>
          <Link to="/#strengths">
            <div id="navvision" class="nav-element">
              Strenghts
            </div>
          </Link>
          <Link to="/#team">
            <div id="navvision" class="nav-element">
              Team
            </div>
          </Link>
          <Link to="/#portfolio">
            <div id="navvision" class="nav-element">
              Portfolio
            </div>
          </Link>
          <Link to="/#news">
            <div id="navvision" class="nav-element">
              News
            </div>
          </Link>
          <Link to="/contact">
            <div id="navcontact" className="nav-element">
              Contact
            </div>
          </Link>
        </div>
        <div
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
          role="button"
          tabIndex={0}
		  className="hamburger"
        >
          <img
            id="hamburger"
            className="hamburger"
            src={hamburger}
            alt="logo"
          />
        </div>
      </nav>
    )
  }
}

export default Header
