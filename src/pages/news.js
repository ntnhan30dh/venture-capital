import React, { useState } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const NewsPage = () => {
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
              content
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
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
    numberOfPosts: 9,
  })
  const allPosts = data.allWordpressWpNews.edges.slice(0, state.numberOfPosts)
  const numnerOfAllPosts = data.allWordpressWpNews.edges.length

  const increaseNumberOfPosts = () => {
    const numberOfPosts = state.numberOfPosts + 9
    setState({
      numberOfPosts,
    })
  }
  const handleInputChange = event => {
    // console.log(event.target.value)
    const numberOfPosts = state.numberOfPosts
    const query = event.target.value
    const posts = data.allWordpressWpNews.edges || []
    const filteredData = posts.filter(post => {
    
      const { title, date } = post.node
      const { excerpt, content } = post.node.acf
      const dateTemp = new Date(date)
      const month = monthNames[dateTemp.getMonth()]
      
      return (
        excerpt.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        date.toLowerCase().includes(query.toLowerCase()) ||
        month.toLowerCase().includes(query.toLowerCase()) ||
        content.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData,
      numberOfPosts,
    })
  }

  
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="news mt-10 md:mt-20 pb-10 md:pb-20 max-w-1240 xl:mx-auto">
        <div className="top lg:flex justify-between px-4">
          <h2 className="h2">Recent articles</h2>
          {/* <h2>{numnerOfAllPosts}</h2> */}
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              aria-label="Search"
              onChange={handleInputChange}
              value={state.query}
            />
          </div>
        </div>
        <div class="new-cards lg:flex  justify-center">
          {posts
            .sort((a, b) =>
              a.node.date < b.node.date
                ? 1
                : -1
            )
            .map(i => {
              {/* const date = new Date(i.node.date) */}
              return (
                <a class="news-card w-full bg-white my-4 sm:p-4 pb-4 lg:w-1/3 max-w-sm lg:max-w-none" href={`/post/${i.node.slug}`}>
                  <div class="news-picture">
                    <img
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      alt="post"
                    />
                  </div>
                  <div class="news-text">
                    {/* <p class="date">
                      {monthNames[date.getMonth()]} {date.getDate()},{" "}
                      {date.getFullYear()}
                    </p> */}
                    {/* <p class="excerpt">{i.node.acf.excerpt}</p> */}
                    <p class="/excerpt text-lg  font-bold pt-4">{i.node.title}</p>
                  </div>
                </a>
              )
            })}
        </div>
        {(numnerOfAllPosts>state.numberOfPosts)&&!hasSearchResults && (
          <div className="w-full sm:w-44 lg:w-64 mx-auto bg-blue hover:bg-darkBlue py-4 rounded-48px text-center mt-20">
        <button className=" label1 text-white hover:text-white" onClick={increaseNumberOfPosts}> 
        +View more articles
        </button>
      </div>
        )}
      </div>
    </Layout>
  )
}

export default NewsPage
