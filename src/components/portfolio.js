import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"

import arrow from "../images/portfolio_arrow-up-right.png"

const Portfolio = props => {
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
                  fluid(maxHeight: 500) {
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
    <div className="portfolio w-full relative ">
      <h2 className="h2 text-center  pt-14 lg:pt-20  pb-8 lg:mb-40">
        Our Portfolio
      </h2>
      <div className=" flex flex-wrap justify-center items-center w-full max-w-6xl mx-auto">
        {data.allWordpressWpPortfolio.edges
          .sort((a, b) =>
            a.node.wordpress_id < b.node.wordpress_id
              ? 1
              : b.node.wordpress_id > a.node.wordpress_id
              ? -1
              : 0
          )
          // .slice(0, 1)
          .map(i => {
            return (
              <Modal
                trigger={
                  <div className="w-32 lg:w-40 mx-4 lg:mx-8 my-8">
                    <img
                      alt="logo"
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      className="w-full"
                    />
                  </div>
                }
                fluid
                closeIcon
              >
                <div className="modal p-4 lg:p-32">
                  {/* <a
                    className=""
                    href={
                      data.allWordpressAcfPortfolio.edges.filter(
                        x => x.node.wordpress_id === i.node.wordpress_id
                      )[0].node.acf.portfolio_url
                    }
                    target="_blank"
                    rel="noreferrer"
                  ></a> */}
                  <div className="top">
                  <div className="w-1/2 lg:w-2/5">
                    <img
                      alt="logo"
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="text ml-4 lg:ml-10">
                    <h3 className="h3">
                    {i.node.title}
                    </h3>
                     </div>
                  </div>
                  <div
                    className="	"
                    dangerouslySetInnerHTML={{
                      __html: data.allWordpressAcfPortfolio.edges.filter(
                        x => x.node.wordpress_id === i.node.wordpress_id
                      )[0].node.acf.portfolio_text,
                    }}
                  ></div>
                </div>
              </Modal>
            )
          })}
      </div>
    </div>
  )
}

export default Portfolio
