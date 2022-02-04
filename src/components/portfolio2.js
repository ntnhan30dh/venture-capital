import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import arrow from "../images/portfolio_arrow-up-right.png"

const Portfolio2 = (props) => {
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
    <div  className="portfolio-page w-full relative sm:pb-20">
    <div id="portfolio" className="absolute -top-32" ></div>

      <div className="px-1/10 w-full">
        <h1 className={`font-bold ${props.size.h1} py-16 md:py-28 text-center`}>
          Our Portfolio
        </h1>
        <div className="portfolio-text">
          <p className={`${props.size.p} leading-relaxed text-center mx-2 sm:mx-1/5 xl:mx-1/4 font-light	`}>
            Our investee companies range{" "}
            <span className="font-bold">
              {" "}
              from plant-based food producers to online delivery platforms.{" "}
            </span>
          </p>
        </div>
        <div className=" w-full mt-10">
          <div className=" flex flex-wrap justify-start w-full">
            {data.allWordpressWpPortfolio.edges
              .sort((a, b) =>
                a.node.wordpress_id < b.node.wordpress_id
                  ? 1
                  : b.node.wordpress_id > a.node.wordpress_id
                  ? -1
                  : 0
              )
              //.slice(0, 12)
              .map(i => {
                return (
                  // for desktop
                  <div className="w-1/2 md:w-1/3 xl:w-1/4">
                    <a
                      className=""
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
                            i.node.featured_media.localFile.childImageSharp
                              .fluid.src
                          }
                          className="portfolio-brand_img"
                        />
                        <div className="portfolio-overlay hidden lg:block bg-gray p-4 transform ">
                          <div className="top relative  h-1/3 w-full">
                            <div class="picWrap w-8 absolute top-4 right-4">
                              <img src={arrow} alt="arrow" className="w-full" />
                            </div>
                          </div>
                          <div className="bottom h-2/3 w-full flex flex-col align-center">
                            <h1 className="text-2xl font-bold uppercase text-black py-4">
                              {i.node.title}
                            </h1>
                            <div
                              className="overlay-text_portfolio2 text-lg text-black font-light	"
                              dangerouslySetInnerHTML={{
                                __html: data.allWordpressAcfPortfolio.edges.filter(
                                  x =>
                                    x.node.wordpress_id === i.node.wordpress_id
                                )[0].node.acf.portfolio_text,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="blueCrad hidden lg:block absolute w-full h-full hover: transform -translate-x-3 hover: translate-y-3   top-0  -z-1"></div>
                      </div>
                    </a>

                    {/* for mobile */}
                    <div className="/portfolio-brand /portfolio-mobile hidden">
                      <img
                        alt="logo"
                        src={
                          i.node.featured_media.localFile.childImageSharp.fluid
                            .src
                        }
                      />
                      <div className="portfolio-overlay">
                        <div className="overlay-text_portfolio">
                          <div
                            // className="overlay-text_portfolio"
                            dangerouslySetInnerHTML={{
                              __html: data.allWordpressAcfPortfolio.edges.filter(
                                x => x.node.wordpress_id === i.node.wordpress_id
                              )[0].node.acf.portfolio_text,
                            }}
                          ></div>
                          <a
                            href={
                              data.allWordpressAcfPortfolio.edges.filter(
                                x => x.node.wordpress_id === i.node.wordpress_id
                              )[0].node.acf.portfolio_url
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            to website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio2
