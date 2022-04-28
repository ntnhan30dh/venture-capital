import React from "react"
import Layout from "../components/layout"

import Slideshow from "../components/slideshow"
import Focus from "../components/focus"
import Strengths from "../components/strengths"
import Team from "../components/team"
import Portfolio from "../components/portfolio"
import News from "../components/news"
import Contact from "../components/contact"


const IndexPage = () => {

  const fontSize = {
    "h1" : "text-4xl sm:text-5xl",
    "h2" : "text-2xl sm:text-24px",
    "p" : "text-lg xxsm:text-xl sm:text-2xl",
    "p2" : "text-lg  "

  }
  return (
    <Layout>
      <Slideshow/>
      <Strengths/>
      <Focus />
      <Portfolio/>
      <Team/>
      <News />
      <Contact size={fontSize}/>  
    </Layout>
  )
}

export default IndexPage
