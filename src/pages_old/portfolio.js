import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


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
              portfolio_url
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
      <div id="portfolio-page" className="portfolio-page container">
        <div className="inner-container">
          <h2>Our Portfolio</h2>
          <div className="portfolio-text">
          <h3>We are proud supporters of category leaders across the globe</h3>
            {/* <p>
              {
                data.allWordpressAcfPages.edges.filter(
                  i => i.node.wordpress_id === 65
                )[0].node.acf.text
              }
            </p> */}
          </div>
          <div className="inner-container">
            <div className="portfolio-container">
              {data.allWordpressWpPortfolio.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0)).map(i => (
            <a href={data.allWordpressAcfPortfolio.edges.filter(
                          x => x.node.wordpress_id === i.node.wordpress_id
                        )[0].node.acf.portfolio_url} target="_blank" rel="noreferrer">
                <div className="portfolio-brand">
                  <img alt="logo" src={i.node.featured_media.localFile.childImageSharp.fluid.src}/>
                  <div className="portfolio-overlay">
                    <div className="overlay-text_portfolio" dangerouslySetInnerHTML={{__html:data.allWordpressAcfPortfolio.edges.filter(
                          x => x.node.wordpress_id === i.node.wordpress_id
                        )[0].node.acf.portfolio_text}}>
                    </div>
                  </div>
                </div>
            </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer id="footer" className="footer container">
        <Link to="/contact"><div className="cta-button">
			FIND OUT MORE
				</div></Link>
			<div className="footer-footer">
			Copyright© 2021 Delivery Hero SE<br/>
			<br/>
			Here impressum and disclaimers as by law.
		</div>
        </footer> 
    </Layout>
  )
}

export default PortfolioPage
