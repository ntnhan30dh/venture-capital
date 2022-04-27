import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Modal } from "semantic-ui-react"

const Team = props => {
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
              academic_background
              companies
              location
              linkedin
            }
          }
        }
      }
    }
  `)
  const teamArr = data.allWordpressWpTeam.edges.sort((a, b) =>
    a.node.date > b.node.date
      ? 1: -1
  )

  return (
    <div class="team bg-gray sm:w-4/5 mx-auto lg:w-full max-w-7xl	">
      {console.log(teamArr)}
      <h2 className="h2 text-center mt-14 lg:mt-20  mb-8 lg:mb-10">Our Team</h2>
      <div class="cards flex flex-wrap justify-center">
        {teamArr.map(i => (
          <Modal
            trigger={
              <article class="relative mx-2 lg:mx-3 mb-6 lg:mb-14">
                <div className="overflow-hidden">
                <div class="w-40 lg:w-72 transform ease-linear duration-300 hover:scale-125">
                  <img
                    src={
                      i.node.featured_media.localFile.childImageSharp.fluid.src
                    }
                    alt="teamMember"
                    className="w-full"
                  />
                </div>
                </div>
                <div class="w-40 lg:w-72">
                  <h3 class="h3">{i.node.title}</h3>
                  <p class="body1 ">{i.node.acf.job_title}</p>
                </div>
              </article>
          
            }
            fluid
            closeIcon
          >
          <article className="p-4 pt-14 lg:flex">
            <div className="top flex lg:flex-col lg:mr-10">
              <div className="w-40 lg:w-72 relative mr-4 mb-10">
                <img
                  src={
                    i.node.featured_media.localFile.childImageSharp.fluid.src
                  }
                  alt="teamMember"
                  className="w-full"
                />
                <a
                  className="absolute bottom-0 right-0 w-6 lg:w-10"
                  href={i.node.acf.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" fill="#006EFF" />
                    <path
                      d="M10.8908 8C10.319 8 9.76012 8.16954 9.28474 8.48718C8.80936 8.80482 8.43884 9.25629 8.22005 9.78451C8.00125 10.3127 7.94401 10.894 8.05555 11.4547C8.16709 12.0155 8.4424 12.5305 8.84668 12.9348C9.25096 13.3391 9.76605 13.6144 10.3268 13.726C10.8876 13.8375 11.4688 13.7803 11.997 13.5615C12.5252 13.3427 12.9767 12.9722 13.2943 12.4968C13.612 12.0214 13.7815 11.4625 13.7815 10.8908C13.7815 10.1241 13.477 9.3888 12.9348 8.84668C12.3927 8.30456 11.6574 8 10.8908 8ZM26.0168 15.6639C25.0783 15.63 24.1481 15.8512 23.3254 16.304C22.5026 16.7568 21.8181 17.4243 21.3445 18.2353H21.2269V16.0336H16.5546V32H21.4958V24.1176C21.4958 22.0336 21.916 20.0336 24.4874 20.0336C27.0588 20.0336 27.0588 22.3697 27.0588 24.2353V32H32V23.2269C32 18.9412 31.0924 15.6639 26.0672 15.6639H26.0168ZM8.47059 16.0336V32H13.5126V16.0336H8.47059Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="text">
                <h3 className="h3">{i.node.title}</h3>
                <p className="body1 ">{i.node.acf.job_title}</p>
                <p className="body2 flex mt-4">
                  {" "}
                  <span>
                    {" "}
                    <div className="w-4 mr-1">
                      <svg
                        width="100%"
                        height="auto"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 19.1673C8 19.1673 15.5 14.1673 15.5 8.33398C15.5 6.34486 14.7098 4.43721 13.3033 3.03068C11.8968 1.62416 9.98912 0.833984 8 0.833984C6.01088 0.833984 4.10322 1.62416 2.6967 3.03068C1.29018 4.43721 0.5 6.34486 0.5 8.33398C0.5 14.1673 8 19.1673 8 19.1673ZM11.3333 8.33333C11.3333 10.1743 9.84091 11.6667 7.99996 11.6667C6.15901 11.6667 4.66663 10.1743 4.66663 8.33333C4.66663 6.49238 6.15901 5 7.99996 5C9.84091 5 11.3333 6.49238 11.3333 8.33333Z"
                          fill="#2D3339"
                        />
                      </svg>
                    </div>{" "}
                  </span>{" "}
                  {i.node.acf.location}
                </p>
              </div>
            </div>
            <div className="bottom ">
              <h3 className="h3">
              Professional background:
              </h3>
              <p className="body1 my-6 /lg:w-96">{i.node.acf.biography}</p>
              <h3 className="h3">
              Academic background:
              </h3>
              <p className="body1 my-6"  dangerouslySetInnerHTML={{
                          __html:i.node.acf.academic_background,
                        }}></p>
                        <h3 className="h3">
              Companies:
              </h3>
              <p className="body1 my-6"  dangerouslySetInnerHTML={{
                          __html:i.node.acf.companies,
                        }}></p>
            </div>
          </article>
          </Modal>
        ))}
        <div className="w-40 lg:w-72 sm:hidden"></div>
      </div>
    </div>
  )
}

export default Team
