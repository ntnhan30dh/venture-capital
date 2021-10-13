import React from "react"
import { graphql, useStaticQuery } from "gatsby"


const Mission = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressAcfMission {
        edges {
          node {
            id
          }
        }
        nodes {
          acf {
            text
          }
        }
      }
    
    }
  `)
  return (
		<section id="mission" className="header container">
			<div className="header bg-container"></div>
			<div className="header-text">
				<div className="section-title"><h2>OUR MISSION</h2></div>
				<div className="text-body">{data.allWordpressAcfMission.nodes[0].acf.text}</div>
			</div>
		</section>
  )
}

export default Mission
