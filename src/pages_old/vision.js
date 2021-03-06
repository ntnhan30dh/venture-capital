import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

import dpurple from "../images/dpurple.svg"
import xpurple from "../images/xpurple.svg"
import cpurple from "../images/cpurple.svg"
import vpurple from "../images/vpurple.svg"

const VisionPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressAcfPages {
        edges {
          node {
            wordpress_id
            acf {
              text
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="vision section-title">
        <h2>Investment Philosophy</h2>
        <p>
          {
            data.allWordpressAcfPages.edges.filter(
              i => i.node.wordpress_id === 97
            )[0].node.acf.text
          }{" "}
        </p>
      </div>
      <div id="vision" className="vision-page container">
        <div className=" inner-container">
          <div className="philosophy-grid">
            <div className="philosophy-element">
              <div className="philosophy-icon">
                <div className="philosophy-text">ON DEMAND</div>
                <img alt="logo" src={dpurple} />
              </div>
              <div className="philosophy-desc">
                <strong>
                  Enabling the <br />
                  On-Demand Economy
                </strong>
                <br />
                <br />
                • Food / Grocery Tech
                <br />
                • Other On-Demand (Online to offline)
                <br />
                • Mobility
                <br />
                • Catering
                <br />
              </div>
            </div>
            <div className="philosophy-element">
              <div className="philosophy-text">FOOD &amp; KITCHEN 2.0</div>
              <div className="philosophy-icon">
                <img alt="logo" src={xpurple} />
              </div>
              <div className="philosophy-desc">
                <strong>Shaping How We Consume and Prepare Food</strong>
                <br />
                <br />
                • Food 2.0: Meat Substitutes
                <br />
                • Next Gen. Drinks
                <br />
                • Agri-tech
                <br />
                • Restaurant Procurement
                <br />
                • Restaurant Reviews
                <br />
                • Cloud kitchen and new kitchen concepts
                <br />
                • Packaging
                <br />
              </div>
            </div>
            <div className="philosophy-element">
              <div className="philosophy-text">AI-ENABLED TECHNOLOGY</div>
              <div className="philosophy-icon">
                <img alt="logo" src={vpurple} />
              </div>
              <div className="philosophy-desc">
                <strong>Outstanding Tech-Capabilities</strong>
                <br />
                <br />
                • Logistics &amp; Autonomous Delivery
                <br />
                • Robotics
                <br />
                • Supply-Chain Optimization
                <br />
              </div>
            </div>
            <div className="philosophy-element">
              <div className="philosophy-text">FINTECH</div>
              <div className="philosophy-icon">
                <img alt="logo" src={cpurple} />
              </div>
              <div className="philosophy-desc">
                <strong>At The Forefront of the Fintech Revolution</strong>
                <br />
                <br />
                • Mobile Banking
                <br />
                • P2P Lending
                <br />
                • POS Systems
                <br />
                • Wallet &amp; Loyalty
                <br />
                • Blockchain
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="footer container">
        <Link to="/contact">
          <div className="cta-button">FIND OUT MORE</div>
        </Link>
        <div className="footer-footer">
          Copyright© 2021 Delivery Hero SE
          <br />
          <br />
          Here impressum and disclaimers as by law.
        </div>
      </footer>
    </Layout>
  )
}

export default VisionPage
