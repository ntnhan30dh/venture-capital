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
            title
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                    srcSet
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
              <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[0].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              />
              <div class="name-cont">
                <div class="name">Niklas Östberg</div>
                <div class="role">Co-Founder delivery hero</div>
              </div>
            </div>{" "}
            <div class="member-cont">
              <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[2].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              />
              <div class="name-cont">
                <div class="name">Mark Venema</div>
                <div class="role">SVP Strategy</div>
              </div>
            </div>
            <div class="member-cont">
              <Img
                alt="avatar"
                fluid={
                  data.allWordpressWpTeamHome.edges[1].node.featured_media
                    .localFile.childImageSharp.fluid
                }
              />
              <div class="name-cont">
                <div class="name">Duncan McIntyre</div>
                <div class="role">VP Strategy</div>
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
