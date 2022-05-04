import React, { useState, useEffect } from "react"
import logo_blue from "../images/logo_blue.png"
import logo_green from "../images/logo_green.png"
import { Link } from "gatsby"
import Scrollspy from "react-scrollspy"

const Header = props => {
  const [scroll, setScroll] = useState(false)
  // const [position, setPosition] = useState(0)
  // const [visible, setVisible] = useState(true)

  useEffect(() => {
   const handleScroll = () => {
    //  setPosition(window.pageYOffset)
    //   let moving = window.pageYOffset
    //   setVisible(position > moving)
    //   setPosition(moving)
      setScroll(window.scrollY > 50)
    //  console.log(visible)
    }
    window.addEventListener("scroll", handleScroll )
    // return () => {
    //   window.removeEventListener("scroll", ()=>{})
    // }
  }, [ ])
  let header_position = scroll ? "sticky top-0" : "absolute"
  //const cls = visible ? "visible" : "transform lg:-translate-y-20"
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  const link = "pb-6 lg:pb-0 lg:h-full lg:flex lg:items-center"
  const span = `my-auto text-white ${
    scroll ? "lg:text-space hover:text-blue" : "hover:text-green"
  }   /hover:border-b-2  mx-2  label2 lg:text-sm lg:font-bold`
  const logoState = props.menuState ? logo_green : logo_blue
  const barState = props.menuState ? "bg-white" : "bg-space"

  return (
    <header
      className={`headerWrapper ease-linear duration-75 delay-20	  ${
        props.menuState ? "" : "px-4"
      } lg:px-4  ${header_position} z-50 w-full  ${
        scroll ? " bg-white" : "bg-transparent"
      } `}
    >
      <nav
        className={` relative flex justify-between   max-w-1240 mx-auto ${
          props.menuState ? "bg-space lg:bg-transparent" : ""
        } bg-transparent 	`}
      >
        <Link
          to="/"
          className={`w-44 lg:w-72 my-4 lg:my-5 ${
            props.menuState ? " absolute lg:static" : ""
          } left-4 lg:left-0 /top-4`}
        >
          <img
            src={scroll ? logoState : logo_green}
            alt="logo"
            className="lg:hidden"
          />
          <img
            src={scroll ? logo_blue : logo_green}
            alt="logo"
            className="hidden lg:block"
          />
        </Link>
        <div
          to="/"
          className={`burgerMenu ${
            props.menuState ? "absolute" : ""
          }  h-4 my-auto right-4 top-6  ${change}`}
          onClick={props.toggleMenu}
          onKeyDown={props.toggleMenu}
          role="button"
          tabIndex={-1}
        >
          <div class={`bar1 ${scroll ? barState : "bg-white"}`}></div>
          {/* <div class="bar2"></div> */}
          <div class={`bar3 ${scroll ? barState : "bg-white"}`}></div>
        </div>
        <Scrollspy
          className={`rightDiv ${
            scroll ? "blue" : "green"
          } h-full  hidden flex lg:flex flex-col justify-center items-center lg:flex-row w-screen lg:w-full h-screen lg:h-auto flex-wrap lg:flex-nowrap  lg:justify-between lg:ml-20    ${menuActive}`}
          currentClassName={scroll ? "current" : ""}
          items={[
            "about",
            "strengths",
            "focus",
            "portfolio",
            "team",
            "news",
            "contact",
          ]}
          offset={-50}
        >
          <Link
            onClick={props.toggleMenu}
            to="/#about"
            href="about"
            className={link}
            activeClassName="bg-space"
          >
            <span className={span}>About Us</span>
          </Link>
          <Link
            onClick={props.toggleMenu}
            to="/#strengths"
            href="strengths"
            className={link}
            activeClassName="bg-space"
          >
            <span className={span}>Our Strengths</span>
          </Link>
          <Link
            onClick={props.toggleMenu}
            to="/#focus"
            href="focus"
            className={link}
          >
            <span className={span}>Our Focus</span>
          </Link>
          <Link
            onClick={props.toggleMenu}
            to="/#portfolio"
            href="portfolio"
            className={link}
          >
            <span className={span}>Our Portfolio</span>
          </Link>

          <Link
            onClick={props.toggleMenu}
            to="/#team"
            href="team"
            className={link}
          >
            <span className={span}>Our Team</span>
          </Link>

          <Link
            onClick={props.toggleMenu}
            to="/#news"
            href="news"
            className={link}
          >
            <span className={span}>News</span>
          </Link>

          <Link
            onClick={props.toggleMenu}
            to="/#contact"
            href="contact"
            className={link}
          >
            <span className={span}>Contact Us</span>
          </Link>
        </Scrollspy>
        <div className="w-full h-0.5 bg-white opacity-20 absolute -bottom-0.5 left-0 hidden lg:block">
          {" "}
        </div>
      </nav>
    </header>
  )
}

export default Header
