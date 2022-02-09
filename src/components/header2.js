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
  //   const span = `my-auto ${
  //   scroll ? " text-white sm:text-black" : "text-white"
  // }  uppercase hover:text-blue mx-2  text-2xl sm:text-base `

  const span = `my-auto text-white sm:text-black  hover:text-blue hover:border-b-2  mx-2  text-2xl sm:text-base lg:text-xl `
  
  // const fillColor = scroll ? "black" : "white"
  const fillColor =  "black"
  return (
    //<header className={`headerWrapper ${position} z-50 w-full ${scroll ? " sm:bg-white" : "" }`} >
    <header className={`headerWrapper ${position} z-50 w-full  sm:bg-white`} >
    
      <nav className={`flex justify-between sm:px-1/20 ${props.menuState ? "bg-space" : ""} sm:bg-transparent`}>
        {/* <div className=""> */}
          <Link to="/" className=" hidden sm:block w-48 md:w-1/5 my-8 //lg:w-48 ">
            <img src={logo} alt="logo" />
            {/* <svg
              width="100%"
              //height="81"
              viewBox="0 0 80 81"
              fill={fillColor}
              xmlns="http://www.w3.org/2000/svg"
              className=" fill-blue"
            >
              <path d="M17.2846 24.6543L21.7343 20.3986C19.9956 19.3518 17.6087 18.8721 14.6422 18.8721H6.12294L1.66699 41.7204H10.5477C20.8618 41.7204 24.9937 34.5114 24.9937 27.0095C25.0601 25.3499 24.6259 23.7087 23.7473 22.299L17.2846 24.6543ZM11.0151 36.281H9.70639L12.0684 24.2243H13.9006C16.6863 24.2243 17.7022 25.863 17.7022 28.1248C17.7209 32.6795 15.1969 36.281 11.0151 36.281Z" />
              <path d="M30.5033 42.4343L34.3395 35.5929L35.6399 42.4343H43.8326L40.419 30.4864L47.6038 19.5859H39.4762L36.2251 25.5108L35.1848 19.5859H27.1872L30.1782 30.5191L22.083 42.4343H30.5033Z" />
              <path d="M8.36491 55.0967L12.4616 44.0512H11.2548L7.79329 53.6292L4.33177 44.0512H3.125L7.22166 55.0967H8.36491ZM20.4008 55.0967V54.0552H15.0021V50.0473H19.9245V49.0059H15.0021V45.0926H20.3214V44.0512H13.8906V55.0967H20.4008ZM23.4178 55.0967V46.1025L29.6104 55.0967H30.5631V44.0512H29.4516V53.0454L23.259 44.0512H22.3063V55.0967H23.4178ZM36.6763 55.0967V45.0926H40.0902V44.0512H32.1509V45.0926H35.5648V55.0967H36.6763ZM45.6477 55.286C46.8703 55.286 47.8707 54.9231 48.6329 54.213C49.395 53.503 49.7761 52.5404 49.7761 51.3412V44.0512H48.6646V51.3412C48.6646 53.1085 47.5531 54.213 45.6477 54.213C43.7423 54.213 42.6308 53.1085 42.6308 51.3412V44.0512H41.5193V51.3412C41.5193 52.5404 41.9004 53.503 42.6625 54.213C43.4247 54.9231 44.425 55.286 45.6477 55.286ZM53.2694 55.0967V50.6785H56.3816L58.9857 55.0967H60.2559L57.5407 50.5364C58.2394 50.3313 58.811 49.9526 59.2556 49.3688C59.7161 48.785 59.9384 48.1064 59.9384 47.3648C59.9384 46.4496 59.6049 45.6764 58.9539 45.0295C58.3029 44.3825 57.5248 44.0512 56.6039 44.0512H52.1579V55.0967H53.2694ZM56.6039 49.637H53.2694V45.0926H56.6039C57.2231 45.0926 57.7471 45.3135 58.1759 45.7553C58.6046 46.1972 58.8269 46.7336 58.8269 47.3648C58.8269 47.9802 58.6046 48.5167 58.1759 48.9743C57.7471 49.4161 57.2231 49.637 56.6039 49.637ZM68.354 55.0967V54.0552H62.9553V50.0473H67.8776V49.0059H62.9553V45.0926H68.2746V44.0512H61.8438V55.0967H68.354ZM73.7527 55.286C74.8801 55.286 75.7851 55.002 76.4679 54.4497C77.1507 53.8817 77.5 53.1242 77.5 52.1933C77.5 51.6252 77.3095 51.1045 77.1031 50.7731C76.9125 50.4102 76.3568 50.0315 76.0392 49.8422C75.8804 49.7317 75.6264 49.6213 75.2929 49.495C74.9595 49.353 74.7054 49.2583 74.5307 49.211L73.6733 48.9112C72.8 48.6272 72.1648 48.3431 71.7838 48.0749C71.4027 47.8066 71.2121 47.3964 71.2121 46.8441C71.2121 45.6449 72.1331 44.9348 73.5145 44.9348C74.8324 44.9348 75.7375 45.5502 76.2456 46.7652L77.1824 46.2445C76.5632 44.8559 75.2453 43.8618 73.5145 43.8618C72.5459 43.8618 71.7361 44.1301 71.0851 44.6823C70.4341 45.2188 70.1006 45.9605 70.1006 46.8914C70.1006 47.854 70.5293 48.5798 71.3709 49.0848C71.7361 49.3214 72.4983 49.6213 73.6574 50C74.626 50.3155 75.3247 50.6153 75.7534 50.9152C76.1821 51.215 76.3885 51.641 76.3885 52.2248C76.3885 53.4241 75.4199 54.213 73.7686 54.213C72.0696 54.213 70.9739 53.4083 70.577 52.0355L69.6243 52.5878C70.1959 54.2761 71.7202 55.286 73.7527 55.286Z" />
            </svg> */}
            
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
        {/* </div> */}
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
