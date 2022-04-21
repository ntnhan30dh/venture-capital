import React from "react"
import Layout from "../components/layout"

import Slideshow from "../components/slideshow"
import Mission2 from "../components/mission2"
import Story2 from "../components/story2"
import Focus2 from "../components/focus2"
import Strengths2 from "../components/strengths2"
import Team2 from "../components/team2"
import Portfolio2 from "../components/portfolio2"
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
      <Slideshow size={fontSize}/>
      <Story2  size={fontSize}/>
      <Focus2 size={fontSize} />
      <Strengths2 size={fontSize} />
      <Team2 size={fontSize}/>
      <Portfolio2 size={fontSize} />
      <News2 size={fontSize} />
      <Contact2 size={fontSize}/>  
    </Layout>
  )
}

export default IndexPage
