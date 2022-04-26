import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"



const Team = (props) => {
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
    <div  class="team bg-gray">
      <h2 className="h2 text-center mt-14 lg:mt-20  mb-8 lg:mb-10">Our Team</h2>
      <div class="cards flex flex-wrap justify-center">
        {teamArr.map(i => (
          <Modal
            trigger={
              <article class="relative mx-2 lg:mx-3 mb-6 lg:mb-8">
                  <div class="w-40 lg:w-72">
                    <img
                      src={
                        i.node.featured_media.localFile.childImageSharp.fluid
                          .src
                      }
                      alt="teamMember"
                      className="w-full"
                    />
                  </div>
                  <div class="w-40 lg:w-72">
                    <h3 class="h3">{i.node.title}</h3>
                    <p class="body1 ">{i.node.acf.job_title}</p>
                  </div>
              </article>
            }
            fluid
            size="small"
            closeIcon
          >
                    <p class="">{i.node.title}</p>
                    <p class="">{i.node.acf.job_title}</p>
                
              <p class="bio pt-8 ">{i.node.acf.biography}</p>
           
          </Modal>
        ))}
        <div className="w-40 lg:w-72"></div>
      </div>
    </div>
  )
}

export default Team
