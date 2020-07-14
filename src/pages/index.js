import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Img from "gatsby-image"


//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import indexStyles from "./index.module.scss"
import Slideshow from "../components/slideshow"
import Portfolio from "../components/portfolio"
import Team from "../components/team"
import Philosophy from "../components/philosophy"
import Strengths from "../components/strengths"



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
    <Layout>
   
{/* <div>
  <h1>{data.allWordpressWpTeamHome.edges[0].node.title}</h1>
  <div className ="imgContainer">
  <Img
                    alt=""
                    fluid={data.allWordpressWpTeamHome.edges[0].node.featured_media.localFile.childImageSharp.fluid}
                    
                  />
    
    </div> 
</div>  */}

{/* <main id="wrapper" class="wrapper"> */}
		
		
		<Slideshow/>	
		<Portfolio/>
		<Team/>
		<Philosophy/>
		<Strengths/>
		


	{/* </main> */}
    </Layout>

)}

export default IndexPage
