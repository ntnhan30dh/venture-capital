import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const News = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
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
    <div id ="news" class="newsComponent container">
      <div class="section-title">
        <h2>FROM THE NEWS</h2>
      </div>
      <div class="news-cards">
        {data.allWordpressWpNews.edges
          .sort((a, b) =>
            a.node.date < b.node.date
              ? 1
              : -1
          ).slice(0, 3)
          .map(i => {
            const date = new Date(i.node.date)
            return (
              <a class="news-card" href={`/post/${i.node.slug}`}>
                <div class="news-picture">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="main cover"
                  />
                </div>
                <div class="news-text">
                  <p class="date">
                    -{monthNames[date.getMonth()]} {date.getDate()},{" "}
                    {date.getFullYear()}
                  </p>
                  {/* <p class="excerpt">{i.node.acf.excerpt}</p> */}
                  <p class="excerpt">{i.node.title}</p>
                </div>
              </a>
            )
          })}
      </div>
      <div className="bottom">
        <Link class="button" to="/news">
          SEE MORE NEWS
        </Link>
      </div>
    </div>
  )
}

export default News
