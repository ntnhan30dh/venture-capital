import React from "react"
//import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
//import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"
import network from "../images/network.svg"
import profile from "../images/profile.svg"
import comet from "../images/comet.svg"
import execution from "../images/execution.svg"
import globalImg from "../images/global.svg"
import knowhow from "../images/knowhow.svg"
import graph from "../images/graph.svg"
import logo from "../images/logo.svg"

const Strengths = () => {
  //   const data = useStaticQuery(graphql`

  //   `)
  return (
    <div id="strengths" class="strengths-page container">
      <div class="inner-container">
        <h2>OUR STRENGTHS</h2>
        <div class="strength-grid">
          <div class="strength network">
            <div class="strength-icon">
              <img src={network} />
            </div>
            <div class="strength-description">GLOBAL FOUNDER NETWORK</div>
            <div class="strength-overlay">
            Our network of experienced company founders is available to advise and assist portfolio companies on their journey.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={profile} />
            </div>
            <div class="strength-description">FOUNDER-CENTRIC PHILOSOPHY</div>{" "}
            <div class="strength-overlay left">
            We believe in creating a long- term partnership with founders to grow successful and sustainable businesses.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={comet}/>
            </div>
            <div class="strength-description">
              LEVERAGING DELIVERY HERO'S PLATFORM
            </div>{" "}
            <div class="strength-overlay left">
            Delivery Hero’s global platform helps us to identify, qualify and add value to our investee companies, both in terms of global insights and local know-how.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={execution}/>
            </div>
            <div class="strength-description">ACTIVE VALUE CREATION</div>
            <div class="strength-overlay left">
            We take a hands-on approach to actively working with founders to create valuable businesses.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={globalImg} />
            </div>
            <div class="strength-description">GLOBAL APPROACH AND MINDSET</div>
            <div class="strength-overlay left">
            Our team brings an international mindset and diverse global experience, and is well positioned to identify opportunities wherever they arise.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={knowhow} />
            </div>
            <div class="strength-description">
              SUPPORT THROUGH THE LIFECYCLE
            </div>
            <div class="strength-overlay left">
            From start-up to IPO, we seek to support the most promising companies at critical stages of their development, with capacity to participate in multiple funding rounds.
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={graph} />
            </div>
            <div class="strength-description">FLEXIBLE INVESTMENT MANDATE</div>
            <div class="strength-overlay left">
            A broad investment mandate gives flexibility to invest across sectors, stages and geographies, as well as providing follow-on funding.
            </div>
          </div>
          <div class="logo-strength">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strengths
