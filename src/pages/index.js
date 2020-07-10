import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allWordpressWpTeamHome{
      edges{
        node{title
          featured_media{
         localFile{
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
              srcSet
            }
          }
        }
            source_url
            
          }
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
<div>
  <h1>{data.allWordpressWpTeamHome.edges[0].node.title}</h1>
  <div className ="imgContainer">
  <Img
                    alt=""
                    fluid={data.allWordpressWpTeamHome.edges[0].node.featured_media.localFile.childImageSharp.fluid}
                    
                  />
    
    </div> 
</div> 

)}

export default IndexPage
