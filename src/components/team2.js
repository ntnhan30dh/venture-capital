import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"

import twitter from "../images/team_twitter.png"
import fb from "../images/team_fb.png"
import slack from "../images/team_slack.png"

const Team2 = (props) => {
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
    <div  class="team2 relative bg-gray sm:pb-20 md:px-1/10">
    <div id="team" className="absolute -top-32" ></div>
      <h1 className={`font-bold ${props.size.h1} p-20 md:py-28 text-center`}>Our Team</h1>
      <div class="cards flex flex-col md:flex-row justify-center lg:px-1/20 2xl:px-1/10  ">
        {teamArr.map(i => (
          <Modal
            trigger={
              <article class="relative card   mx-4 w-1/10 z-0">
                <div className="blueCrad hidden md:block absolute w-full h-full bg-blue top-0 -z-1 "></div>
                <div className="picCard h-full flex  md:flex-col  bg-white z-10  mb-10 md:mb-0  transform hover:translate-x-3 hover:-translate-y-3 sm:mx-1/10 md:mx-0">
                  <div class="picWrap w-1/4 md:w-1/3 md:w-full ">
                    <img
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      alt="teamMember"
                    />
                  </div>
                  <div class="team-text sm:my-10 px-8 ">
                    {/* <p class="name">{i.node.title.split(" ").slice(0, -1).join(" ")} <br/> {i.node.title.split(" ")[i.node.title.split(" ").length-1]}</p> */}
                    <p class={`font-bold pt-2 ${props.size.p}`}>{i.node.title}</p>
                    <p class={props.size.p2}>{i.node.acf.job_title}</p>
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
                {/* <div class="picWrap w-1/3 ">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="teamMember"
                  />
                </div> */}
                <div className=" flex flex-col justify-between ">
                  <div class="team-text  ">
                    {/* <p class="name">{i.node.title.split(" ").slice(0, -1).join(" ")} <br/> {i.node.title.split(" ")[i.node.title.split(" ").length-1]}</p> */}
                    <p class="font-bold md:text-2xl">{i.node.title}</p>
                    <p class="text-lg">{i.node.acf.job_title}</p>
                  </div>
                  {/* <div className="icons flex">
                    {icon(twitter)}
                    {icon(fb)}
                    {icon(slack)}
                  </div> */}
                </div>
              </div>
              <p class="bio pt-8 ">{i.node.acf.biography}</p>
            </div>
          </Modal>
        ))}
      </div>
    </div>
  )
}

export default Team2
