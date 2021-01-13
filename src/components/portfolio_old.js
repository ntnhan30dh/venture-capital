// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Link from "gatsby-link"


// const Portfolio = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allWordpressWpPortfolioHome {
//         edges {
//           node {
//             title
//             wordpress_id
//             featured_media {
//               source_url
//               localFile {
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid
// 					         src
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div id="portfolio" class="portfolio container">
//       <div className="portfolio bg-container"></div>
//       <div className="portfolio inner-container">
//         <div className="portfolio-left">
//           <div className="section-title">
//             <h2>Our Portfolio</h2>
//           </div>
//           <div className="portfolio-grid">
//             <div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges.sort((a,b) => (a.node.wordpress_id > b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[5].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
//             <div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges[4].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
// 			<div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges[3].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
// 			<div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges[2].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
// 			<div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges[1].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
// 			<div className="brand-box">
//               <img src={data.allWordpressWpPortfolioHome.edges[0].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//             </div>
//           </div>
//           <Link to="/portfolio">
//             <div className="link">DISCOVER FULL PORTFOLIO &gt;</div>
//           </Link>
//         </div>
//         <div className="portfolio-right"></div>
//       </div>
//     </div>
//   )
// }

// export default Portfolio
