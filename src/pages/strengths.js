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
    <div id="strengths" class="strengths-page container">
      <div class="inner-container">
        <h2>Why work with us</h2>
        <div class="strength-grid">
          <div class="strength network">
            <div class="strength-icon">
              <img src={network} />
            </div>
            <div class="strength-description">NETWORK</div>
            <div class="strength-overlay">
              <div class="strength-icon-overlay">
                <img src={network} />
                <div class="strength-description">NETWORK</div>
              </div>
              <div class="overlay-text">
                Instant access to the largest global network of restaurants with
                more than 500,000 restaurants on our platforms as well as the
                largest global sales force within the sector
              </div>
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={industry} />
            </div>
            <div class="strength-description">INDUSTRY EXPERTS</div>{" "}
            <div class="strength-overlay left">
              <div class="strength-icon-overlay">
                <img src={industry} />
                <div class="strength-description">INDUSTRY EXPERT</div>
              </div>
              <div class="overlay-text">
                Startups will have access to Delivery Hero's global industry
                experts, who are world-leading experts in their area of
                practice. They cover areas such as logistics, marketing,
                product, engineering, data science, operations, strategy and
                fund-raising.
              </div>
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={technology} />
            </div>
            <div class="strength-description">BEST-IN-CLASS TECHNOLOGY</div>{" "}
            <div class="strength-overlay left">
              <div class="strength-icon-overlay">
                <img src={technology} />
                <div class="strength-description">BEST-IN-CLASS TECHNOLOGY</div>
              </div>
              <div class="overlay-text">
                Creating an amazing takeaway experience through embracing
                cutting-edge innovation
              </div>
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={execution} />
            </div>
            <div class="strength-description">
              PROVEN EXECUTION CAPABILITIES
            </div>{" "}
            <div class="strength-overlay left">
              <div class="strength-icon-overlay">
                <img src={execution} />
                <div class="strength-description">
                  PROVEN EXECUTION CAPABILITIES
                </div>
              </div>
              <div class="overlay-text">
                More than 90% of GMV is generated from clear leadership markets
                winning market share in every single market globally
              </div>
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={global} />
            </div>
            <div class="strength-description">GLOBAL REACH</div>
            <div class="strength-overlay left">
              <div class="strength-icon-overlay">
                <img src={global} />
                <div class="strength-description">GLOBAL REACH</div>
              </div>
              <div class="overlay-text">
                Delivery Hero’s technology and products cater to widely
                different local requirements across the globe
              </div>
            </div>
          </div>
          <div class="strength industry">
            <div class="strength-icon">
              <img src={knowhow} />
            </div>
            <div class="strength-description">
              LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE
            </div>
            <div class="strength-overlay">
              <div class="strength-icon-overlay">
                <img src={knowhow} />
                <div class="strength-description">
                  LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE
                </div>
              </div>
              <div class="overlay-text">
                Delivery Hero takes great pride in backing world-class
                entrepreneurs with hyperlocal insights into each and every
                market.
              </div>
            </div>
          </div>
          <div class="logo-strength">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default StrengthsPage
