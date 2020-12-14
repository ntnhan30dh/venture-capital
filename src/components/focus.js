import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Focus = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPortfolioHome {
        edges {
          node {
            title
            wordpress_id
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      {/* <!-- FOCUS --> */}
      <div id="focus" class="focus container">
        <div class="section-title">
          <h2>OUR FOCUS</h2>
        </div>
        <div class="focus-cont">
          <div class="focus-card card1">
            <div class="focus-text">
              <span class="title">ON DEMAND</span>
              <br />
              <span class="text">Enabling the On-Demand Economy</span>
              <br />
              <span className="hoverText">
                Quick commerce <br /> Online to offline <br />
                Groceries <br />
                Catering <br /> Mobility
              </span>
            </div>
          </div>
          <div class="focus-card card2">
            <div class="focus-text">
              <span class="title">FOOD &amp; KITCHEN 2.0</span>
              <br />
              <span class="text">Shaping How We Consume Food</span>
              <br />
              <span className="hoverText">
                Food technology <br />
                Alternative protein <br />
                Food service concepts
                <br />
                Procurement Agri-tech
                <br />
                Sustainability
              </span>
            </div>
          </div>
          <div class="focus-card card3">
            <div class="focus-text">
              <span class="title">SUPPLY CHAIN</span>
              <br />
              <span class="text">Deep Technology Capabilities</span>
              <br />
              <span className="hoverText">
                Artificial intelligence <br /> Blockchain <br />
                Robotics Sensors & IoT <br />
                Supply chain <br /> Logistics
              </span>
            </div>
          </div>
          <div class="focus-card card4">
            <div class="focus-text">
              <span class="title">FINTECH</span>
              <br />
              <span class="text">
                At the Forefront of the Fintech Revolution
              </span>
              <br />
              <span className="hoverText">
                Financial inclusion
                <br /> Digital payments
                <br />
                Next generation banking <br />
                Lending
                <br />
                Insurance
                <br />
                Loyalty
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END FOCUS --> */}
    </div>
  )
}

export default Focus
