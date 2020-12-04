import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpTeam {
        edges {
          node {
            date
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
        {data.allWordpressWpTeam.edges.sort((a,b) => (a.node.date < b.node.date) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))
          .map(i => ( <div class="team-card">
          <div class="team-picture">
            <img src={i.node.featured_media.localFile
                    .childImageSharp.fluid.src} />
          </div>
          <div class="team-text">
            <p class="name">{i.node.title}</p>
            <p class="role">{
                    data.allWordpressAcfTeam.edges.filter(
                      x => x.node.wordpress_id === i.node.wordpress_id
                    )[0].node.acf.job_title
                  }</p>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Team
