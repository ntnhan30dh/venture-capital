import React, { useState, useEffect } from "react"
import logo_blue from "../images/logo_blue.png"
import logo_green from "../images/logo_green.png"
import { Link } from "gatsby"

const Header
 = props => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50)
      console.log(scroll)
    })
  }, [])
  let position = scroll ? "sticky top-0" : "absolute"

  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  const link = "pb-6 lg:pb-0 h-full flex items-center"
  const span = `my-auto text-white ${scroll?"lg:text-black":""}  hover:text-blue /hover:border-b-2  mx-2  label2 lg:text-sm lg:font-bold`
  const logoState = props.menuState?logo_green:logo_blue
  const barState = props.menuState?"bg-white":"bg-black"
  
  return (
    <header className={`headerWrapper  ${position} z-50 w-full  ${scroll ? " bg-white" : "bg-transparent" } `} >
      <nav className={` relative flex justify-between px-4 lg:mx-24 ${props.menuState ? "bg-space lg:bg-transparent" : ""} bg-transparent 	`}>
          <Link to="/" className={`w-44 lg:w-72 my-4 lg:my-5 ${props.menuState?" absolute lg:static":""} left-4 top-4`}>
            <img src={scroll?logoState:logo_green} alt="logo" className="lg:hidden" />
            <img src={scroll?logo_blue:logo_green} alt="logo"  className="hidden lg:block"/>
          </Link>
          <div
            to="/"
            className={`burgerMenu ${props.menuState?"absolute":""}  h-4 my-auto right-4 top-8  ${change}`}
            onClick={props.toggleMenu}
            onKeyDown={props.toggleMenu}
            role="button"
            tabIndex={-1}
          >
            <div class={`bar1 ${scroll? barState: "bg-white"}`}></div>
            {/* <div class="bar2"></div> */}
            <div class={`bar3 ${scroll?barState: "bg-white"}`}></div>
          </div>
        <div
          className={`rightDiv h-full  hidden flex lg:flex flex-col justify-center items-center lg:flex-row w-screen lg:w-full h-screen lg:h-auto flex-wrap lg:flex-nowrap  lg:justify-between lg:ml-20    ${menuActive}`}
        >
          <Link
            onClick={props.toggleMenu}
            to="/#mission"
            className={link}
            activeClassName="bg-black"
          >
            <span className={span}>About Us</span>
          </Link>
          <Link
            onClick={props.toggleMenu}
            to="/#strengths"
            className={link}
            activeClassName="bg-black"
          >
            <span className={span}>Our Strengths</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#focus" className={link}>
            <span className={span}>Our Focus</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#portfolio" className={link}>
            <span className={span}>Our Portfolio</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#team" className={link}>
            <span className={span}>Our Team</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#news" className={link}>
            <span className={span}>News</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#contact" className={link}>
            <span className={span}>Contact Us</span>
          </Link>
        </div>
        <div className="w-full h-0.5 bg-white opacity-20 absolute bottom-0 left-0 /mx-24 hidden lg:block"> </div>
      </nav>
    </header>
  )
}

export default Header

