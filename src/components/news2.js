import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import arrow from "../images/news_arrow.png"

const News2 = (props) => {
  // const monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ]
  const data = useStaticQuery(graphql`
    {
      allWordpressWpNews {
        edges {
          node {
            slug
            acf {
              excerpt
            }
            date
            title
            featured_media {
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
    <div class="newsComponent relative pt-10 bg-gray">
      <div id="news" className="absolute -top-32"></div>

      <div class="section-title">
        <h1 className={`font-bold ${props.size.h1} py-20 md:py-28 text-center`}>
          From the News
        </h1>
      </div>
      <div class="news-cards sm:px-1/10">
        {data.allWordpressWpNews.edges
          .sort((a, b) => (a.node.date < b.node.date ? 1 : -1))
          .slice(0, 3)
          .map(i => {
           // const date = new Date(i.node.date)
            return (
              <div className="news-card bg-white my-4 sm:m-4 flex flex-col pb-4">
                <div class="news-picture">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="main cover"
                  />
                </div>
                <div className="textWrap flex flex-col justify-between px-2 md:px-4 flex-grow">
                  <div class="news-text  ">
                    <h1 class={`/excerpt ${props.size.p2} font-bold pt-4`}>{i.node.title}</h1>
                  </div>
                  <a
                    class="readMore flex items-center mt-6 text-blue text-lg font-semibold"
                    href={`/post/${i.node.slug}`}
                  >
                    Read more{" "}
                    <span>
                      {" "}
                      <div class="picWrap ml-2 w-6 ">
                        <img src={arrow} alt="arrow" className="w-full" />
                      </div>
                    </span>
                  </a>
                </div>
              </div>
            )
          })}
        {data.allWordpressWpNews.edges
          .sort((a, b) => (a.node.date < b.node.date ? 1 : -1))
          .slice(0, 3).length < 3 && (
          <a href="/" className="news-card">
            {" "}
          </a>
        )}
      </div>
      
      <article class="relative card my-4 md:my-20  mx-auto z-0 max-w-max ">
        <Link to="/news">
          <div className="blueCrad  absolute w-full h-full  bg-green top-0 -z-1 "></div>
          <div className="picCard bg-blue z-10 px-20 py-5 transform hover:translate-x-3 hover:-translate-y-3">
            <div
              class=" text-2xl font-bold text-white hover:text-white "
              to="/news"
            >
              See more news
            </div>
          </div>
        </Link>
      </article>
      <div className="opacity-0">hi</div>
    </div>
  )
}

export default News2
