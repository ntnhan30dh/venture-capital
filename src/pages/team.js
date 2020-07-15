import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const TeamPage = () => {
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
    <Layout>
      <div id="team-page" class="team-page container">
        <h2>Our Team</h2>
        <div class="inner-container">
          <div class="member-container">
            <div class="member-photo">
              <img
                alt="member"
                src={
                  data.allWordpressWpTeam.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.featured_media.localFile
                    .childImageSharp.fluid.src
                }
              />
            </div>
            <div class="member-text">
              <span class="member-name">
                {data.allWordpressWpTeam.edges[2].node.title}
              </span>
              <span class="member-role">
                {data.allWordpressAcfTeam.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.acf.job_title}
              </span>
              <span class="member-description">
			  {data.allWordpressAcfTeam.edges[2].node.acf.biography}
              </span>
            </div>
          </div>
          <div class="member-container">
            <div class="member-text">
              <span class="member-name">
                {data.allWordpressWpTeam.edges[1].node.title}
              </span>
              <span class="member-role">
                {data.allWordpressAcfTeam.edges[1].node.acf.job_title}
              </span>
              <span class="member-description">
			  {data.allWordpressAcfTeam.edges[1].node.acf.biography}

              </span>
            </div>
            <div class="member-photo">
              <img
                alt="member"
                src={
                  data.allWordpressWpTeam.edges[1].node.featured_media.localFile
                    .childImageSharp.fluid.src
                }
              />
            </div>
          </div>
          <div class="member-container">
            <div class="member-photo">
              <img
                alt="member"
                src={
                  data.allWordpressWpTeam.edges[0].node.featured_media.localFile
                    .childImageSharp.fluid.src
                }
              />
            </div>
            <div class="member-text">
              <span class="member-name">
                {data.allWordpressWpTeam.edges[0].node.title}
              </span>
              <span class="member-role">
                {data.allWordpressAcfTeam.edges[0].node.acf.job_title}
              </span>
              <span class="member-description">
			  {data.allWordpressAcfTeam.edges[0].node.acf.biography}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TeamPage
