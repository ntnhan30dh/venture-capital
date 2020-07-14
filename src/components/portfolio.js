import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPortfolioHome {
        edges {
          node {
            title
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                    srcSet
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
    <div id="portfolio" class="portfolio container">
      <div class="portfolio bg-container"></div>
      <div class="portfolio inner-container">
        <div class="portfolio-left">
          <div class="section-title">
            <h2>Our Portfolio</h2>
          </div>
          <div class="portfolio-grid">
            <div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[5].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[5].node.featured_media.source_url} alt="logo"></img>
            </div>
            <div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[4].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[4].node.featured_media.source_url} alt="logo"></img>
            </div>
			<div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[3].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[3].node.featured_media.source_url} alt="logo"></img>
            </div>
			<div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[2].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[2].node.featured_media.source_url} alt="logo"></img>
            </div>
			<div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[1].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[1].node.featured_media.source_url} alt="logo"></img>
            </div>
			<div class="brand-box">
              {/* <Img
                alt="logo"
                fluid={
                  data.allWordpressWpPortfolioHome.edges[0].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img src={data.allWordpressWpPortfolioHome.edges[0].node.featured_media.source_url} alt="logo"></img>
            </div>
          </div>
          <a href="portfolio.html">
            <div class="link">DISCOVER FULL PORTFOLIO &gt;</div>
          </a>
        </div>
        <div class="portfolio-right"></div>
      </div>
    </div>
  )
}

export default Portfolio
