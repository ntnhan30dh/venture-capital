import React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/slideshow"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
import Philosophy from "../components/philosophy"
import Strengths from "../components/strengthsComponent"



const IndexPage = () => {
  return (
    <Layout>
		<Slideshow/>	
		<Portfolio/>
		<Team/>
		<Philosophy/>
		<Strengths/>
    </Layout>

)}

export default IndexPage
