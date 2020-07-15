import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
import Img from "gatsby-image"
//import galleryStyles from "./gallery.module.scss"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpTeamHome {
        edges {
          node {
            wordpress_id
            title
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
					src
                  }
                }
              }
            }
          }
        }
      }
      allWordpressAcfTeamHome{
        edges{
          node{
            wordpress_id
            acf{
              job_title
            }
          }
        }
      }
    }
    
  `)
  return (
    <div id="team" class="team container">
      <div class="team bg-container"></div>
      <div class="team inner-container">
        <div class="team-left"></div>
        <div class="team-right">
          <div class="section-title">
            <h2>Our Team</h2>
          </div>
          <div class="team-grid">
            <div class="member-cont">
              {/* <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[0].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img  class="avatar" src={data.allWordpressWpTeamHome.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
              <div class="name-cont">
                <div class="name">{data.allWordpressWpTeamHome.edges[2].node.title}</div>
                <div class="role">{data.allWordpressAcfTeamHome.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.acf.job_title}</div>
              </div>
            </div>{" "}
            <div class="member-cont">
              {/* <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[2].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img  class="avatar" src={data.allWordpressWpTeamHome.edges[1].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>

              <div class="name-cont">
              <div class="name">{data.allWordpressWpTeamHome.edges[1].node.title}</div>
                <div class="role">{data.allWordpressAcfTeamHome.edges[1].node.acf.job_title}</div>
              </div>
            </div>
            <div class="member-cont">
              {/* <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[1].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              /> */}
              <img  class="avatar" src={data.allWordpressWpTeamHome.edges[0].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
              <div class="name-cont">
              <div class="name">{data.allWordpressWpTeamHome.edges[0].node.title}</div>
                <div class="role">{data.allWordpressAcfTeamHome.edges[0].node.acf.job_title}</div>
              </div>
            </div>
          </div>
          <a href="team.html">
            <div class="link">MEET OUR TEAM &gt;</div>
          </a>
          <div class="portfolio-right"></div>
        </div>
      </div>
    </div>
  )
}

export default Team
