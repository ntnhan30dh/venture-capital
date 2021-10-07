import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"

import twitter from "../images/team_twitter.png"
import fb from "../images/team_fb.png"
import slack from "../images/team_slack.png"

const Team2 = () => {
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

  const icon = pic => {
    return (
      <div class="picWrap w-8 mr-4 ">
        <img src={pic} alt="teamMember" />
      </div>
    )
  }
  return (
    <div id="team" class="team2 bg-gray py-20">
      <h1 className="font-bold text-5xl p-20 text-center">Our Team</h1>

      <div class="cards flex justify-center  ">
        {teamArr.map(i => (
          <Modal
            trigger={
              <article class="relative card   mx-4 w-1/10 z-0">
                <div className="blueCrad  absolute w-full h-full bg-blue top-0 -z-1 "></div>
                <div className="picCard bg-white z-10 pb-10 transform hover:translate-x-3 hover:-translate-y-3">
                  <div class="picWrap ">
                    <img
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      alt="teamMember"
                    />
                  </div>
                  <div class="team-text my-10 px-8">
                    {/* <p class="name">{i.node.title.split(" ").slice(0, -1).join(" ")} <br/> {i.node.title.split(" ")[i.node.title.split(" ").length-1]}</p> */}
                    <p class="font-bold text-2xl">{i.node.title}</p>
                    <p class="text-lg">{i.node.acf.job_title}</p>
                  </div>
                </div>
              </article>
            }
            fluid
            size="small"
            closeIcon
          >
            <div className="bioWrap p-20">
              <div className="top flex pb-20 border-b-2 border-gray ">
                <div class="picWrap w-1/3 ">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="teamMember"
                  />
                </div>
                <div className=" flex flex-col justify-between ml-10">
                  <div class="team-text  ">
                    {/* <p class="name">{i.node.title.split(" ").slice(0, -1).join(" ")} <br/> {i.node.title.split(" ")[i.node.title.split(" ").length-1]}</p> */}
                    <p class="font-bold text-2xl">{i.node.title}</p>
                    <p class="text-lg">{i.node.acf.job_title}</p>
                  </div>
                  <div className="icons flex">
                    {icon(twitter)}
                    {icon(fb)}
                    {icon(slack)}
                  </div>
                </div>
              </div>
              <p class="bio mt-8 ">{i.node.acf.biography}</p>
            </div>
          </Modal>
        ))}
      </div>
    </div>
  )
}

export default Team2
