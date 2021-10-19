import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"

const BlogPostTemplate = ({ data }) => {
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
  const date = new Date(data.wordpressWpNews.date)
  return (
    <Layout>
      <div className="news-single">
        <BackgroundImage
          className="main-pic"
          fluid={
            data.wordpressWpNews.featured_media.localFile.childImageSharp.fluid
          }
        />
        <div className="main pt-10">
          {/* <p className="date">
          {monthNames[date.getMonth()]} {date.getDate()},{" "}
                    {date.getFullYear()}
          </p> */}
          <h1 className="title ">
        {data.wordpressWpNews.title}
          </h1>
          <div className="content" dangerouslySetInnerHTML={{ __html: data.wordpressWpNews.acf.content }}>

          </div>
        </div>
       
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpNews(wordpress_id: { eq: $id }) {
      title
      content
      date
      acf {
        excerpt
        content
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
              src
            }
          }
        }
      }
    }
  }
`
