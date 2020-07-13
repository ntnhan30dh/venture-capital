import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"


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

<main id="wrapper" class="wrapper">
		
		
		<header id="slideshow" class="slideshow slider container">
			<div id="slide1" class="slide">
				<img src="images/slideshow1.png"/>
			</div>			
			<div id="slide2" class="slide">
				<img src="images/slideshow2.png"/>
			</div>			
			<div id="slide3" class="slide">
				<img src="images/slideshow3.png"/>
			</div>
		</header>
		
		<div id="portfolio" class="portfolio container">
			<div class="portfolio bg-container"></div>
			<div class="portfolio inner-container">
				<div class="portfolio-left">
					<div class="section-title" className={indexStyles.galleryWrap} ><h2>Our Portfolio</h2></div>
					<div class="portfolio-grid">
						<div class="brand-box"><img src="images/rappilogo.png" alt="logo"/></div>
						<div class="brand-box"><img src="images/rituallogo.png" alt="logo"/></div>
						<div class="brand-box"><img src="images/biolutionlogo.png" alt="logo"/></div>
						<div class="brand-box"><img src="images/glovologo.png" alt="logo"/>
					</div>
						<div class="brand-box"><img src="images/justlogo.png" alt="logo"/></div>
						<div class="brand-box"><img src="images/impossiblelogo.png" alt="logo"/></div>
					</div>
					<a href="portfolio.html"><div class="link">DISCOVER FULL PORTFOLIO &gt;</div></a>
				</div>
				<div class="portfolio-right"></div>
			</div>
			
		</div>
		
		<div id="team" class="team container">
			<div class="team bg-container"></div>
			<div class="team inner-container">
				<div class="team-left"></div>
				<div class="team-right">
					<div class="section-title"><h2>Our Team</h2></div>
					<div class="team-grid">
						<div class="member-cont">
							<img class="avatar" src="images/niklas.png"/>
							<div class="name-cont">
								<div class="name">Niklas Östberg</div>
								<div class="role">Co-Founder delivery hero</div>
							</div>
						</div>						<div class="member-cont">
							<img class="avatar" src="images/mark.png"/>
							<div class="name-cont">
								<div class="name">Mark Venema</div>
								<div class="role">SVP Strategy</div>
							</div>
						</div>	
						<div class="member-cont">
							<img class="avatar" src="images/duncan.png"/>
							<div class="name-cont">
								<div class="name">Duncan McIntyre</div>
								<div class="role">VP Strategy</div>
							</div>
						</div>
					</div>
					<a href="team.html"><div class="link">MEET OUR TEAM &gt;</div></a>
					<div class="portfolio-right"></div>
				</div>
			</div>
		</div>
	
		
		<div id="philosophy" class="philosophy container">
			<div class="philosophy inner-container">
				<div class="section-title"><h2>Investment Philosophy</h2></div>
					<div class="philosophy-grid">
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src="images/icon-d.svg"/>
								<img class="mobile" src="images/d-mobile.svg"/>
							</div>
							<div class="philosophy-text">
							ON DEMAND</div>
						</div>
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src="images/icon-x.svg"/>
								<img class="mobile" src="images/x-mobile.svg"/></div>
							<div class="philosophy-text">
								FOOD &amp; KITCHEN 2.0</div>
						</div>	
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src="images/icon-v.svg"/>
								<img class="mobile" src="images/v-mobile.svg"/></div>
							<div class="philosophy-text">AI ENABLED TECHNOLOGY</div>
						</div>
						<div class="philosophy-element">
							<div class="philosophy-icon">
								<img class="nomobile" src="images/icon-c.svg"/>
								<img class="mobile" src="images/c-mobile.svg"/></div>
							<div class="philosophy-text">
							FINTECH</div>
						</div>
					</div>
				<a href="vision.html"><div class="link">EXPLORE OUR PHILOSOPHY &gt;</div></a>
			</div>				
		</div>
		
		<div id="strengths" class="strengths container">
			<div class="strengths inner-container">
					<div class="strength-grid">
						<div class="strength network">
							<div class="strength-icon">
								<img src="images/network.svg"/>
							</div>
							<div class="strength-description">NETWORK</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/industry.svg"/>
							</div>
							<div class="strength-description">INDUSTRY EXPERT</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/technology.svg"/>
							</div>
							<div class="strength-description">BEST-IN-CLASS TECHNOLOGY</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/execution.svg"/>
							</div>
							<div class="strength-description">PROVEN EXECUTION CAPABILITIES</div>
						</div>						
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/global.svg"/>
							</div>
							<div class="strength-description">GLOBAL REACH</div>
						</div>
						<div class="strength industry">
							<div class="strength-icon">
								<img src="images/knowhow.svg"/>
							</div>
							<div class="strength-description">LOCAL KNOW-HOW AND GLOBAL KNOWLEDGE</div>
						</div>
						<div class="logo-strength">
							<img src="images/logo.svg"/>
						</div>
					</div>
			</div>				
		</div>


	</main>
    </Layout>

)}

export default IndexPage
