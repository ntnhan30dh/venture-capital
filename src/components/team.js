import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpTeam {
        edges {
          node {
            wordpress_id
            title
            featured_media {
              source_url
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
      allWordpressAcfTeam {
        edges {
          node {
            wordpress_id
            acf {
              job_title
              biography
            }
          }
        }
      }
    }
  `)
  return (
    <div class="team container">
      <div class="section-title">
        <h2>OUR TEAM</h2>
      </div>
      <div class="team-cont">
        {data.allWordpressWpTeam.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))
          .map(i => ( <div class="team-card">
          <div class="team-picture">
            <img src={i.node.featured_media.localFile
                    .childImageSharp.fluid.src} />
          </div>
          <div class="team-text">
            <p class="name">Duncan McIntyre</p>
            <p class="role">Managing Partner</p>
          </div>
        </div>))}
        {/* <div class="team-card">
          <div class="team-picture">
            <img src="images/duncan-new.png" />
          </div>
          <div class="team-text">
            <p class="name">Duncan McIntyre</p>
            <p class="role">Managing Partner</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-picture">
            <img src="../images/brendon-new.png" />
          </div>
          <div class="team-text">
            <p class="name">Brendon Blacker</p>
            <p class="role">Partner</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-picture">
            <img src="images/miguel-new.png" />
          </div>
          <div class="team-text">
            <p class="name">Miguel Suarez Gallo</p>
            <p class="role">Principal</p>
          </div>
        </div>
        <div class="team-card">
          <div class="team-picture">
            <img src="images/johee-new.png" />
          </div>
          <div class="team-text">
            <p class="name">Joohee Kim</p>
            <p class="role">Principal</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Team
