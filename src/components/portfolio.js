import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Portfolio = () => {
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
                  fluid(maxHeight: 200) {
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
    <div id="portfolio-page" className="portfolio-page container">
      <div className="inner-container">
        <h2>Our Portfolio</h2>
        <div className="portfolio-text">
          <p>
            Our investee companies range from sustainable packaging
            manufacturers to online delivery platforms.{" "}
          </p>
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
            {data.allWordpressWpPortfolio.edges
              .sort((a, b) =>
                a.node.wordpress_id < b.node.wordpress_id
                  ? 1
                  : b.node.wordpress_id > a.node.wordpress_id
                  ? -1
                  : 0
              )
              .slice(0, 9)
              .map(i => (
                <a
                  href={
                    data.allWordpressAcfPortfolio.edges.filter(
                      x => x.node.wordpress_id === i.node.wordpress_id
                    )[0].node.acf.portfolio_url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="portfolio-brand">
                    <img
                      alt="logo"
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                    />
                    <div className="portfolio-overlay">
                      <div
                        className="overlay-text_portfolio"
                        dangerouslySetInnerHTML={{
                          __html: data.allWordpressAcfPortfolio.edges.filter(
                            x => x.node.wordpress_id === i.node.wordpress_id
                          )[0].node.acf.portfolio_text,
                        }}
                      ></div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
