import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"

const Portfolio = () => {
  const [region, setRegion] = useState("ALL")
  const [industry, setIndustry] = useState("ALL")
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
              region
              industry
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

  const filterButton = (filterText, type) => {
    const categories = type === "region" ? region : industry
    const handleCategories = type === "region" ? setRegion : setIndustry
    return (
      <button
        className={`filterButton py-2 px-6 ${
          categories.includes(filterText) ? "bg-blue text-white" : "border-2"
        } rounded-48px  label1 mx-1 mb-4`}
        onClick={() => handleClick(filterText, type)}
      >
        {filterText}
      </button>
    )
  }
  const handleClick = (filterText,type) => {
    if (type === "region"){
      setRegion(filterText)
    } else setIndustry(filterText)
  }

  const portfolios = data.allWordpressWpPortfolio.edges.map(
   p=>(
     {...p, afc: {
     "region":data.allWordpressAcfPortfolio.edges.filter(
      x => x.node.wordpress_id === p.node.wordpress_id
    )[0].node.acf.region?data.allWordpressAcfPortfolio.edges.filter(
      x => x.node.wordpress_id === p.node.wordpress_id
    )[0].node.acf.region:[""],
     "industry":data.allWordpressAcfPortfolio.edges.filter(
      x => x.node.wordpress_id === p.node.wordpress_id
    )[0].node.acf.industry?data.allWordpressAcfPortfolio.edges.filter(
      x => x.node.wordpress_id === p.node.wordpress_id
    )[0].node.acf.industry:[""]
   }})
  )

  const filteredPortfolios = portfolios
  .filter(p=> region === "ALL"?p: p.afc.region.includes(region))
  .filter(p=> industry ==="ALL"?p:p.afc.industry.includes(industry))
    const filterFlield = "text-center"
  const filterHeader = "text-center mb-4"
  return (
    <section className="portfolio w-full relative" id="portfolio">
      <h2 className="h2 text-center  pt-14 lg:pt-20  pb-8 lg:mb-10">
        Our Portfolio
      </h2>
      <div className="filter lg:flex justify-between max-w-7xl mx-auto mb-8 lg:mb-20 px-16">
        <div className={` ${filterFlield}`}>
          <h4 className={`h4 ${filterHeader}`}>Region</h4>
          <div className="buttons">
            {filterButton("ALL", "region")}
            {filterButton("Europe", "region")}
            {filterButton("APAC", "region")}
            {filterButton("MENA", "region")}
            {filterButton("Americas", "region")}
          </div>
        </div>
        <div className={` ${filterFlield}`}>
          <h4 className={`h4 ${filterHeader}`}>Industry</h4>
          <div className="buttons">
            {filterButton("ALL", "industry")}
            {filterButton("Internet", "industry")}
            {filterButton("B2B", "industry")}
            {filterButton("Fintech", "industry")}
            {filterButton("Others", "industry")}
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center w-full max-w-7xl mx-auto">
        {filteredPortfolios
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
                  <div className="w-32 lg:w-60 lg:h-40 mx-4 lg:mx-0 my-8 hover:bg-portfolioGrey ease-linear duration-300 flex justify-center items-center">
                    <img
                      alt="logo"
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      className="w-3/5 max-h-full"
                    />
                  </div>
                }
                fluid
                closeIcon
              >
                <div className="modal p-4 lg:p-8">
                  <div className="top flex">
                    <div className="relative flex justify-center items-center w-40 lg:w-72 h-40 lg:h-72 bg-portfolioGrey">
                      <a className="absolute bottom-0 right-0 w-6 lg:w-10" href={
                      data.allWordpressAcfPortfolio.edges.filter(
                        x => x.node.wordpress_id === i.node.wordpress_id
                      )[0].node.acf.portfolio_url
                    }
                    target="_blank"
                    rel="noreferrer">
                        <svg
                          width="100%"
                          height="auto"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="40" height="40" fill="#006EFF" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M28.0173 24.2751C28.0173 24.7711 27.6152 25.1733 27.1191 25.1733C26.6231 25.1733 26.2209 24.7711 26.2209 24.2751L26.2209 15.3585L13.5013 28.0782C13.1505 28.4289 12.5818 28.4289 12.2311 28.0782C11.8803 27.7274 11.8803 27.1587 12.2311 26.8079L24.9514 14.0876L16.0335 14.0876C15.5374 14.0876 15.1353 13.6855 15.1353 13.1894C15.1353 12.6934 15.5374 12.2912 16.0335 12.2912L28.0173 12.2912V13.1803C28.0174 13.1868 28.0174 13.1933 28.0173 13.1998L28.0173 24.2751Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <div className="w-2/3 ">
                        <img
                          alt="logo"
                          src={
                            i.node.featured_media.localFile.childImageSharp
                              .fluid.src
                          }
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="text ml-4 lg:ml-10 w-2/3">
                      <h3 className="h3 mb-4">{i.node.title}</h3>
                      <p className="mb-2">
                        {" "}
                        <span className="h4  ">{"Industry: "}</span>{" "}
                        <span className="body2">
                          {
                           ( i.afc.industry)&&i.afc.industry[0]
                          }
                        </span>
                      </p>
                      <p>
                        {" "}
                        <span className="h4">{"Region: "}</span>{" "}
                        <span className="body2">
                          {
                            ( i.afc.region)&&i.afc.region[0]
                          }
                        </span>
                      </p>
                      <div
                        className="body1 hidden	md:block mt-10"
                        dangerouslySetInnerHTML={{
                          __html: data.allWordpressAcfPortfolio.edges.filter(
                            x => x.node.wordpress_id === i.node.wordpress_id
                          )[0].node.acf.portfolio_text,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="body1 md:hidden mt-10	"
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
    </section>
  )
}

export default Portfolio
