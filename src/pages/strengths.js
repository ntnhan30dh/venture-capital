import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import network from "../images/network.svg"
import industry from "../images/industry.svg"
import technology from "../images/technology.svg"
import execution from "../images/execution.svg"
import global from "../images/global.svg"
import knowhow from "../images/knowhow.svg"
import logo from "../images/logo.svg"

const StrengthsPage = () => (
  <Layout>
    <div id="strengths" className="strengths-page container">
      <div className="inner-container">
        <h2>Why work with us</h2>
        <div className="strength-grid">
          <div className="strength network">
            <div className="strength-icon">
              <img alt="logo" src={network} />
            </div>
            <div className="strength-description">NETWORK</div>
            <div className="strength-overlay">
              <div className="strength-icon-overlay">
                <img alt="logo" src={network} />
                <div className="strength-description">NETWORK</div>
              </div>
              <div className="overlay-text">
                Instant access to the largest global network of restaurants with
                more than 600,000 restaurants on our platforms as well as the
                largest global sales force within the sector
              </div>
            </div>
          </div>
          <div className="strength industry">
            <div className="strength-icon">
              <img alt="logo" src={industry} />
            </div>
            <div className="strength-description">INDUSTRY EXPERTS</div>{" "}
            <div className="strength-overlay left">
              <div className="strength-icon-overlay">
                <img alt="logo" src={industry} />
                <div className="strength-description">INDUSTRY EXPERTS</div>
              </div>
              <div className="overlay-text">
                Startups will have access to Delivery Hero's global industry
                experts, who are world-leading experts in their area of
                practice. They cover areas such as logistics, marketing,
                product, engineering, data science, operations, strategy and
                fund-raising.
              </div>
            </div>
          </div>
          <div className="strength industry">
            <div className="strength-icon">
              <img alt="logo" src={technology} />
            </div>
            <div className="strength-description">BEST-IN-CLASS TECHNOLOGY</div>{" "}
            <div className="strength-overlay left">
              <div className="strength-icon-overlay">
                <img alt="logo" src={technology} />
                <div className="strength-description">BEST-IN-CLASS TECHNOLOGY</div>
              </div>
              <div className="overlay-text">
                Creating an amazing takeaway experience through embracing
                cutting-edge innovation
              </div>
            </div>
          </div>
          <div className="strength industry">
            <div className="strength-icon">
              <img alt="logo" src={execution} />
            </div>
            <div className="strength-description">
              PROVEN EXECUTION CAPABILITIES
            </div>{" "}
            <div className="strength-overlay left">
              <div className="strength-icon-overlay">
                <img alt="logo" src={execution} />
                <div className="strength-description">
                  PROVEN EXECUTION CAPABILITIES
                </div>
              </div>
              <div className="overlay-text">
                More than 90% of GMV is generated from clear leadership markets
                winning market share in every single market globally
              </div>
            </div>
          </div>
          <div className="strength industry">
            <div className="strength-icon">
              <img alt="logo" src={global} />
            </div>
            <div className="strength-description">GLOBAL REACH</div>
            <div className="strength-overlay left">
              <div className="strength-icon-overlay">
                <img alt="logo" src={global} />
                <div className="strength-description">GLOBAL REACH</div>
              </div>
              <div className="overlay-text">
                Delivery Hero’s technology and products cater to widely
                different local requirements across the globe
              </div>
            </div>
          </div>
          <div className="strength industry">
            <div className="strength-icon">
              <img alt="logo" src={knowhow} />
            </div>
            <div className="strength-description">
              LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE
            </div>
            <div className="strength-overlay">
              <div className="strength-icon-overlay">
                <img alt="logo" src={knowhow} />
                <div className="strength-description">
                  LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE
                </div>
              </div>
              <div className="overlay-text">
                Delivery Hero takes great pride in backing world-class
                entrepreneurs with hyperlocal insights into each and every
                market.
              </div>
            </div>
          </div>
          <div className="logo-strength">
            <img alt="logo" src={logo} />
          </div>
        </div>
      </div>
    </div>
    <footer id="footer" className="footer container">
        <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link>
			<div className="footer-footer">
			Copyright© 2020 Delivery Hero SE<br/>
			<br/>
			Here impressum and disclaimers as by law.
		</div>
        </footer> 
  </Layout>
)

export default StrengthsPage
