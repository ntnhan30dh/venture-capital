// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"


// const Team = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allWordpressWpTeamHome {
//         edges {
//           node {
//             wordpress_id
//             title
//             featured_media {
//               source_url
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 240, maxHeight: 236) {
//                     ...GatsbyImageSharpFluid
// 					src
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//       allWordpressAcfTeamHome{
//         edges{
//           node{
//             wordpress_id
//             acf{
//               job_title
//             }
//           }
//         }
//       }
//     }
    
//   `)
//   return (
//     <div id="team" className="team container">
//       <div className="team bg-container"></div>
//       <div className="team inner-container">
//         <div className="team-left"></div>
//         <div className="team-right">
//           <div className="section-title">
//             <h2>Our Team</h2>
//           </div>
//           <div className="team-grid">
//             <div className="member-cont">
//               <img  className="avatar" src={data.allWordpressWpTeamHome.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//               <div className="name-cont">
//                 <div className="name">{data.allWordpressWpTeamHome.edges[2].node.title}</div>
//                 <div className="role">{data.allWordpressAcfTeamHome.edges.sort((a,b) => (a.node.wordpress_id < b.node.wordpress_id) ? 1 : ((b.node.wordpress_id > a.node.wordpress_id) ? -1 : 0))[2].node.acf.job_title}</div>
//               </div>
//             </div>{" "}
//             <div className="member-cont">
//               <img  className="avatar" src={data.allWordpressWpTeamHome.edges[1].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//               {/* <img  className="avatar" src={mark} alt="logo"></img> */}
//               <div className="name-cont">
//               <div className="name">{data.allWordpressWpTeamHome.edges[1].node.title}</div>
//                 <div className="role">{data.allWordpressAcfTeamHome.edges[1].node.acf.job_title}</div>
//               </div>
//             </div>
//             <div className="member-cont">
//               <img  className="avatar" src={data.allWordpressWpTeamHome.edges[0].node.featured_media.localFile.childImageSharp.fluid.src} alt="logo"></img>
//               <div className="name-cont">
//               <div className="name">{data.allWordpressWpTeamHome.edges[0].node.title}</div>
//                 <div className="role">{data.allWordpressAcfTeamHome.edges[0].node.acf.job_title}</div>
//               </div>
//             </div>
//           </div>
//           <Link  to="/team">
//             <div className="link">MEET OUR TEAM &gt;</div>
//           </Link>
//           <div className="portfolio-right"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Team
