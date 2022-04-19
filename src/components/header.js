import React, { useState, useEffect } from "react"
import logo from "../images/logo_positive.png"
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
  const link = " font-bold pb-6 sm:pb-0 "
  const span = `my-auto text-white sm:text-black  hover:text-blue hover:border-b-2  mx-2  text-2xl sm:text-base lg:text-xl`
  const logoState = props.menuState?logo_green:logo_blue
  const barState = props.menuState?"bg-white":"bg-black"
  
  return (
    <header className={`headerWrapper  ${position} z-50 w-full  ${scroll ? " bg-white" : "bg-transparent" } `} >
      <nav className={` flex justify-between px-4 ${props.menuState ? "bg-space md:bg-transparent" : ""} bg-transparent`}>
          <Link to="/" className={`w-36 md:w-52 my-4 ${props.menuState?" absolute md:relative":""} left-4 top-4`}>
            <img src={scroll?logoState:logo_green} alt="logo" />
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
          className={`rightDiv  hidden flex sm:flex flex-col justify-start sm:justify-center items-center sm:flex-row w-screen sm:w-screen h-screen sm:h-auto sm:w-max flex-wrap sm:flex-nowrap  md:justify-between md:w-3/5  pt-10 xxsm:pt-1/5 xsm:pt-1/10 sm:pt-0  ${menuActive}`}
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

          <Link onClick={props.toggleMenu} to="/#news" className={link}>
            <span className={span}>Contact Us</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#contact" className={link}>
            <span className={span}>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

