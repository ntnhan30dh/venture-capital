import React from "react"
import Layout from "../components/layout"

import Slideshow from "../components/slideshow"
import Mission2 from "../components/mission2"
import Story2 from "../components/story2"
import Focus from "../components/focus"
import Strengths from "../components/strengths"
import Team from "../components/team"
import Portfolio from "../components/portfolio"
import News2 from "../components/news2"
import Contact2 from "../components/contact2"


const IndexPage = () => {

  const fontSize = {
    "h1" : "text-4xl sm:text-5xl",
    "h2" : "text-2xl sm:text-24px",
    "p" : "text-lg xxsm:text-xl sm:text-2xl",
    "p2" : "text-lg  "

  }
  return (
    <Layout>
      {/* <Slideshow/> */}
      <Strengths/>
      <Focus />
      <Portfolio/>
      <Team size={fontSize}/>
      <News2 size={fontSize} />
      {/* <Contact2 size={fontSize}/>   */}
    </Layout>
  )
}

export default IndexPage
