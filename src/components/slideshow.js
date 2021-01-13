// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import Link from "gatsby-link"

// const Slideshow = () => {
//   const settings = {
//     autoplay: true,
//     autoplaySpeed: 5000,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     touchThreshold: 1000,
//     //dots: false,
//     // prevArrow: false,
//     // nextArrow: false
//   }
//   const data = useStaticQuery(graphql`
//     {
//       allWordpressWpSlideshow {
//         edges {
//           node {
//             featured_media {
//               source_url
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 1500, maxHeight: 800) {
//                     ...GatsbyImageSharpFluid
//                     src
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
//     <div id="slideshow" className="slideshow slider container">
//       <Slider {...settings}>
//         <div className="slide">
//           <Link to="/portfolio">
//             <img
//               src={
//                 data.allWordpressWpSlideshow.edges[2].node.featured_media
//                   .localFile.childImageSharp.fluid.src
//               }
//               alt="logo"
//             ></img>
//           </Link>
//         </div>
//         <div className="slide">
//           <Link to="/portfolio">
//             <img
//               src={
//                 data.allWordpressWpSlideshow.edges[1].node.featured_media
//                   .localFile.childImageSharp.fluid.src
//               }
//               alt="logo"
//             ></img>
//           </Link>{" "}
//         </div>
//         <div className="slide">
//           <Link to="/portfolio">
//             <img
//               src={
//                 data.allWordpressWpSlideshow.edges[0].node.featured_media
//                   .localFile.childImageSharp.fluid.src
//               }
//               alt="logo"
//             ></img>
//           </Link>{" "}
//         </div>
//       </Slider>
//     </div>
//   )
// }

// export default Slideshow
