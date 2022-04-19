import React, { useState, useEffect } from "react"
import logo from "../images/logo_positive.png"
import { Link } from "gatsby"

const Header2 = props => {
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
  

  const span = `my-auto text-white sm:text-black  hover:text-blue hover:border-b-2  mx-2  text-2xl sm:text-base lg:text-xl `
  
  return (
    //<header className={`headerWrapper ${position} z-50 w-full ${scroll ? " sm:bg-white" : "" }`} >
    <header className={`headerWrapper ${position} z-50 w-full  sm:bg-white`} >
    
      <nav className={`flex justify-between sm:px-1/20 ${props.menuState ? "bg-space" : ""} sm:bg-transparent`}>
          <Link to="/" className=" hidden sm:block w-48 md:w-1/5 my-8 //lg:w-48 ">
            <img src={logo} alt="logo" />
           
            
          </Link>
          <div
            to="/"
            className={`burgerMenu /rounded-full p-6 /m-3 absolute bg-white  ${change}`}
            onClick={props.toggleMenu}
            onKeyDown={props.toggleMenu}
            role="button"
            tabIndex={-1}
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        <div
          className={`rightDiv  hidden flex sm:flex flex-col justify-start sm:justify-center items-center sm:flex-row w-screen sm:w-screen /bg-white sm:bg-transparent h-screen sm:h-auto sm:w-max flex-wrap sm:flex-nowrap  md:justify-between md:w-3/5  pt-10 xxsm:pt-1/5 xsm:pt-1/10 sm:pt-0  ${menuActive}`}
        >
          <Link
            onClick={props.toggleMenu}
            to="/#mission"
            className={link}
            activeClassName="bg-black"
          >
            <span className={span}>Mission</span>
          </Link>
          <Link
            onClick={props.toggleMenu}
            to="/#story"
            className={link}
            activeClassName="bg-black"
          >
            <span className={span}>Story</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#focus" className={link}>
            <span className={span}>Focus</span>
          </Link>
          <Link onClick={props.toggleMenu} to="/#strengths" className={link}>
            <span className={span}>Strengths</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#team" className={link}>
            <span className={span}>Team</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#portfolio" className={link}>
            <span className={span}>Portfolio</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#news" className={link}>
            <span className={span}>News</span>
          </Link>

          <Link onClick={props.toggleMenu} to="/#contact" className={link}>
            <span className={span}>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header2
