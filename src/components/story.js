import React from "react"
import { graphql, useStaticQuery } from "gatsby"


const Story = () => {
  const data = useStaticQuery(graphql`
  {
    allWordpressAcfStory {
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
		<div id="story" class="story container">
			<div class="story bg-container"></div>
			<div class="story inner-container">
				<div class="story-left">
					<div class="section-title"><h2>OUR STORY</h2></div>
					<div class="text-body">{data.allWordpressAcfStory.nodes[0].acf.text}</div>
					</div>
				<div class="portfolio-right"></div>
			</div>
		</div>
	
  )
}

export default Story
