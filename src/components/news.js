import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const News = (props) => {
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
    <section class="mx-4" id="news">
        <h2 className={` pt-14 lg:pt-20 mb-8 lg:mb-10 h2 text-center`}>
        News
        </h2>
      <div class="news-cards  lg:flex  justify-center ">
        {data.allWordpressWpNews.edges
          .sort((a, b) => (a.node.date < b.node.date ? 1 : -1))
          .slice(0, 3)
          .map(i => {
           // const date = new Date(i.node.date)
            return (
              <a
                    href={`/post/${i.node.slug}`}
                    className="news-card w-full bg-white my-4 sm:m-4 pb-4 lg:w-1/3 max-w-sm hover:text-space"
                  >
                  <div className="overflow-hidden">
                <div className="transform ease-linear duration-300 hover:scale-125 ">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="main cover"
                    className="w-full"
                  />
                </div>
                  </div>
                <div className="textWrap flex flex-col justify-between px-2 md:px-4 flex-grow">
                    <h3 class={`/excerpt h3 pt-4 pb-8`}>{i.node.title}</h3>
                </div>
                  </a>
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
      <div className="w-full sm:w-44 mx-auto bg-blue py-4 rounded-48px text-center">
        <Link to="/news" className=" label1 text-white   "> 
            See all the News
        </Link>
      </div>
      <div className="opacity-0">hi</div>
    </section>
  )
}

export default News