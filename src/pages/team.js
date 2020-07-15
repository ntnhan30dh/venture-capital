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
allWordpressAcfTeam{
  edges{
    node{
      acf{
        job_title
        biography
      }
    }
  }
}
  }
  `)
  return(
  <Layout>
  <div id="team-page" class="team-page container">
			<h2>Our Team</h2>
			<div class="inner-container">
				<div class="member-container">
					<div class="member-photo">
					<img alt="member" src={data.allWordpressWpTeam.edges[2].node.featured_media.localFile.childImageSharp.fluid.src}/></div>
					<div class="member-text">
						<span class="member-name">{data.allWordpressWpTeam.edges[2].node.title}</span>
						<span class="member-role">{data.allWordpressAcfTeam.edges[2].node.acf.job_title}</span>
						<span class="member-description">Niklas Östberg is the Co-founder and Chief Executive Officer of Delivery Hero. Niklas worked for five years as a corporate consultant for Oliver Wyman before co-founding Pizza.nu (later OnlinePizza.se), where he served as chairman. From mid-2009, he also assumed operational responsibility for the international launch of food ordering platforms in Austria, Poland and Finland. In 2011, he founded Delivery Hero with some collaborators from the Berlin start-up scene in order to roll out the business globally from Germany.
						</span>
					</div>
				</div>
				<div class="member-container">
					<div class="member-text">
						<span class="member-name">{data.allWordpressWpTeam.edges[1].node.title} 
</span>
						<span class="member-role">{data.allWordpressAcfTeam.edges[1].node.acf.job_title}</span>
						<span class="member-description">Prior to Delivery Hero, Mark was working for McKinsey, as well as leading M&amp;A and corporate strategy at PepsiCo and most recently at Pernod Ricard where he is also in charge of their Castle Brands Division
						</span>
					</div>
					<div class="member-photo">
					<img alt="member" src={data.allWordpressWpTeam.edges[1].node.featured_media.localFile.childImageSharp.fluid.src}/></div>
				</div>
				<div class="member-container">
					<div class="member-photo">
					<img alt="member" src={data.allWordpressWpTeam.edges[0].node.featured_media.localFile.childImageSharp.fluid.src}/></div>
					<div class="member-text">
						<span class="member-name">{data.allWordpressWpTeam.edges[0].node.title}</span>
						<span class="member-role">{data.allWordpressAcfTeam.edges[0].node.acf.job_title}</span>
						<span class="member-description">Prior to Delivery Hero, Duncan has been active in building and investing in technology companies, including CEO of the Australian operations of a financial technology company. He started his career at Macquarie Bank in the principal investment team working on many cross-border transactions based in Sydney, Cape Town, and Frankfurt since 2005. He joined Delivery Hero in 2014 and has helped internationalize the business through over 30+ M&amp;A transactions expanding operations to 40 countries. He was also responsible for the effort to list the company on the Frankfurt stock exchange in 2017
						</span>
					</div>
				</div>
			</div>
		</div>
  </Layout>
)}

export default TeamPage
