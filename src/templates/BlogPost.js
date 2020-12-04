import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import Layout from "../components/layout"


const BlogPostTemplate = ({ data }) => {
  return (
     <Layout>
   <div className="news-single">
     <div className="main-pic"></div>
     <div className="main">
       <p className="date">
       </p>
       <h1 className="title"></h1>
       <div className="content"></div>
     </div>
     hi{data.wordpressWpNews.title}
     <div
      dangerouslySetInnerHTML={{ __html: data.wordpressWpNews.acf.content }}
    />
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
      date(formatString: "MMMM DD, YYYY")
      acf {
        excerpt
        content
      }
    }
  }
`