import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPortfolio {
        edges {
          node {
            wordpress_id
            title
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid( maxHeight:200) {
                    ...GatsbyImageSharpFluid
					src
                  }
                }
              }
            }
          }
        }
      }
      allWordpressAcfPortfolio {
        edges {
          node {
            wordpress_id
            acf {
              portfolio_text
            }
          }
        }
      }
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
      <div id="portfolio-page" class="portfolio-page container">
        <div class="inner-container">
          <h2>Our Portfolio</h2>
          <div class="portfolio-text">
            <p>
              {
                data.allWordpressAcfPages.edges.filter(
                  i => i.node.wordpress_id === 65
                )[0].node.acf.text
              }
            </p>
          </div>
          <div class="inner-container">
            <div class="portfolio-container">
              {data.allWordpressWpPortfolio.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0)).map(i => (
                <div class="portfolio-brand">
                  <img alt="logo" src={i.node.featured_media.localFile.childImageSharp.fluid.src}/>
                  <div class="portfolio-overlay">
                    <div class="overlay-text">
                      {
                        data.allWordpressAcfPortfolio.edges.filter(
                          x => x.node.wordpress_id === i.node.wordpress_id
                        )[0].node.acf.portfolio_text
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
