import React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import Link from "gatsby-link"
import Img from "gatsby-image"
//import styled from '@emotion/styled';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideshowStyles from "./slideshow.module.scss"

const Slideshow = () => {
  const settings = {
    autoplay: true, 
		autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchThreshold: 1000,
		dots: false,
		prevArrow: false,
		nextArrow: false
  };
  const data = useStaticQuery(graphql`
    {
      allWordpressWpSlideshow {
        edges {
          node {
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500, maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div id="slideshow" class="slideshow slider container"> 
    <Slider {...settings} >
        <div class="slide">
        {/* <Img
          alt=""
          fluid={
            data.allWordpressWpSlideshow.edges[2].node.featured_media.localFile
              .childImageSharp.fluid
          }
        /> */}
        <img src={data.allWordpressWpSlideshow.edges[2].node.featured_media.source_url} alt="logo"></img>
        </div>
        <div class="slide">
        {/* <Img
          alt=""
          fluid={
            data.allWordpressWpSlideshow.edges[1].node.featured_media.localFile
              .childImageSharp.fluid
          }
        /> */}
        <img src={data.allWordpressWpSlideshow.edges[1].node.featured_media.source_url} alt="logo"></img>

        </div>
        <div class="slide">
        {/* <Img
          alt=""
          fluid={
            data.allWordpressWpSlideshow.edges[0].node.featured_media.localFile
              .childImageSharp.fluid
          }
        /> */}
        <img src={data.allWordpressWpSlideshow.edges[0].node.featured_media.source_url} alt="logo"></img>
        </div>
      </Slider>
      </div>
  )
}

export default Slideshow
