import React, { useState } from "react"
import { Link } from "gatsby"

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
    numberOfPosts: 3
  })
  const allPosts = data.allWordpressWpNews.edges.slice(0,state.numberOfPosts)

  const increaseNumberOfPosts = ()=>{
    const numberOfPosts = state.numberOfPosts+1
    setState({
      numberOfPosts
    })
  }
  const handleInputChange = event => {
    // console.log(event.target.value)
    const numberOfPosts = state.numberOfPosts
    const query = event.target.value
    const posts = data.allWordpressWpNews.edges || []
    const filteredData = posts.filter(post => {
      const { title } = post.node
      return (
        // description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
        // ||
        // (tags &&
        //   tags
        //     .join("")
        //     .toLowerCase()
        //     .includes(query.toLowerCase()))
      )
    })
    setState({
      query,
      filteredData,
      numberOfPosts
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="news">
        <div className="top">
          <h1>Recent articles</h1>
          <h2>{state.numberOfPosts}</h2>
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
        <div class="new-cards">
          {posts
            .sort((a, b) =>
              a.node.date < b.node.date
                ? 1
                : b.node.wordpress_id > a.node.wordpress_id
                ? -1
                : 0
            )
            .map(i => {
              const date = new Date(i.node.date)
              return (
                <a class="news-card" href={`/post/${i.node.slug}`}>
                  <div class="news-picture">
                    <img
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                    />
                  </div>
                  <div class="news-text">
                    <p class="date">
                      -{monthNames[date.getMonth()]} {date.getDate()},{" "}
                      {date.getFullYear()}
                    </p>
                    <p class="excerpt">{i.node.acf.excerpt}</p>
                  </div>
                </a>
              )
            })}
        </div>
       { !hasSearchResults&&<button className="showMore" onClick={increaseNumberOfPosts}>
          Show more <br /> &#xfe40;
        </button>}
      </div>
    </Layout>
  )
}

export default NewsPage
