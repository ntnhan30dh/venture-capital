import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

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
            acf {
              biography
              job_title
            }
          }
        }
      }
    }
  `)
  const teamArr = data.allWordpressWpTeam.edges.sort((a, b) =>
    a.node.date < b.node.date
      ? 1
      : b.node.wordpress_id > a.node.wordpress_id
      ? -1
      : 0
  )

  return (
    <div id="team" class="team container">
      <div class="section-title">
        <h2>OUR TEAM</h2>
      </div>
      <div class="team-cont">
        {teamArr.map(i => (
          <div class="team-card ">
            <div className="team-card_left  ">
              <div class="team-picture">
                <img
                  src={
                    i.node.featured_media.localFile.childImageSharp.fluid.src
                  }
                  alt="teamMember"
                />
              </div>
              <div class="team-text">
                <p class="name">{i.node.title.split(" ").slice(0, -1).join(" ")} <br/> {i.node.title.split(" ")[i.node.title.split(" ").length-1]}</p>
                <p class="role">{i.node.acf.job_title}</p>
              </div>
            </div>
            <div className="team-card_right">
              <div className="pic-text">
              <div class="team-picture">
                <img
                  src={
                    i.node.featured_media.localFile.childImageSharp.fluid.src
                  }
                  alt="teamMember"
                />
              </div>
              <div class="team-text">
                <p class="name">{i.node.title}</p>
                <p class="role">{i.node.acf.job_title}</p>
              </div>
              </div>
              <p class="bio">{i.node.acf.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
