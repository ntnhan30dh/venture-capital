import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "gatsby-link"

const Slideshow = () => {
  //creating the ref
  const customeSlider = useRef()
  const gotoNext = () => {
    customeSlider.current.slickNext()
  }

  const gotoPrev = () => {
    customeSlider.current.slickPrev()
  }

  const btnStyle = "absolute z-30 mx-24 hidden lg:block"
  const arrowStyle = "w-14"

  const settings = {
    // autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
    dots: true,
    //  prevArrow: false,
    //  nextArrow: false
  }
  const data = useStaticQuery(graphql`
    {
      allWordpressWpSlideshow {
        edges {
          node {
            wordpress_id
            featured_media {
              source_url
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1500) {
                    ...GatsbyImageSharpFluid
                    src
                  }
                }
              }
            }
          }
        }
      }

      allWordpressAcfSlideshow {
        edges {
          node {
            wordpress_id
            acf {
              description
              logo {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
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
      <div className="section"> 
    <div id="slideshow" className=" w-full relative">
      <button
        onClick={() => gotoPrev()}
        className={` left-20 bottom-24 ${btnStyle} `}
      >
        <div className={arrowStyle}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1901_14341)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.7585 41.9441C24.328 42.5136 25.2513 42.5136 25.8209 41.9441C26.3904 41.3746 26.3904 40.4512 25.8209 39.8817L15.5829 29.6437L44.7897 29.6437C45.5951 29.6437 46.248 28.9908 46.248 28.1854C46.248 27.38 45.5951 26.7271 44.7897 26.7271L15.5833 26.7271L25.8209 16.4895C26.3904 15.92 26.3904 14.9967 25.8209 14.4271C25.2514 13.8576 24.328 13.8576 23.7585 14.4271L11.0455 27.1401C11.0359 27.1494 11.0264 27.1589 11.0171 27.1685L10 28.1856L23.7585 41.9441Z"
                fill="white"
              />
              <path
                d="M25.8209 41.9441L26.1744 42.2976V42.2976L25.8209 41.9441ZM23.7585 41.9441L23.4049 42.2976L23.4049 42.2976L23.7585 41.9441ZM25.8209 39.8817L25.4673 40.2352L25.8209 39.8817ZM15.5829 29.6437V29.1437H14.3758L15.2294 29.9973L15.5829 29.6437ZM44.7897 29.6437V30.1437V29.6437ZM44.7897 26.7271V27.2271V26.7271ZM15.5833 26.7271L15.2298 26.3735L14.3762 27.2271H15.5833V26.7271ZM25.8209 16.4895L25.4673 16.136L25.4673 16.136L25.8209 16.4895ZM25.8209 14.4271L25.4673 14.7807L25.4673 14.7807L25.8209 14.4271ZM23.7585 14.4271L24.112 14.7807V14.7807L23.7585 14.4271ZM11.0455 27.1401L11.3942 27.4985L11.3991 27.4936L11.0455 27.1401ZM11.0171 27.1685L11.3707 27.5221L11.3754 27.5172L11.0171 27.1685ZM10 28.1856L9.64645 27.8321L9.29289 28.1856L9.64645 28.5392L10 28.1856ZM25.4673 41.5905C25.0931 41.9648 24.4863 41.9648 24.112 41.5905L23.4049 42.2976C24.1697 43.0624 25.4096 43.0624 26.1744 42.2976L25.4673 41.5905ZM25.4673 40.2352C25.8416 40.6095 25.8416 41.2163 25.4673 41.5905L26.1744 42.2976C26.9392 41.5329 26.9392 40.2929 26.1744 39.5281L25.4673 40.2352ZM15.2294 29.9973L25.4673 40.2352L26.1744 39.5281L15.9365 29.2902L15.2294 29.9973ZM44.7897 29.1437L15.5829 29.1437V30.1437L44.7897 30.1437V29.1437ZM45.748 28.1854C45.748 28.7147 45.3189 29.1437 44.7897 29.1437V30.1437C45.8712 30.1437 46.748 29.267 46.748 28.1854H45.748ZM44.7897 27.2271C45.3189 27.2271 45.748 27.6561 45.748 28.1854H46.748C46.748 27.1039 45.8712 26.2271 44.7897 26.2271V27.2271ZM15.5833 27.2271L44.7897 27.2271V26.2271L15.5833 26.2271V27.2271ZM25.4673 16.136L15.2298 26.3735L15.9369 27.0806L26.1744 16.8431L25.4673 16.136ZM25.4673 14.7807C25.8416 15.1549 25.8416 15.7617 25.4673 16.136L26.1744 16.8431C26.9392 16.0783 26.9392 14.8384 26.1744 14.0736L25.4673 14.7807ZM24.112 14.7807C24.4863 14.4064 25.0931 14.4064 25.4673 14.7807L26.1744 14.0736C25.4096 13.3088 24.1697 13.3088 23.4049 14.0736L24.112 14.7807ZM11.3991 27.4936L24.112 14.7807L23.4049 14.0736L10.692 26.7865L11.3991 27.4936ZM11.3754 27.5172C11.3816 27.5109 11.3879 27.5046 11.3942 27.4985L10.6968 26.7817C10.684 26.7943 10.6712 26.807 10.6587 26.8199L11.3754 27.5172ZM10.3536 28.5392L11.3706 27.5221L10.6635 26.815L9.64645 27.8321L10.3536 28.5392ZM24.112 41.5905L10.3536 27.8321L9.64645 28.5392L23.4049 42.2976L24.112 41.5905Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1901_14341">
                <rect width="56" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
      <button
        onClick={() => gotoNext()}
        className={` right-20 bottom-24 ${btnStyle}  `}
      >
        <div className={arrowStyle}>
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1901_14346)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.4896 41.9441C31.9201 42.5136 30.9967 42.5136 30.4272 41.9441C29.8577 41.3746 29.8577 40.4512 30.4272 39.8817L40.6652 29.6437L11.4584 29.6437C10.653 29.6437 10 28.9908 10 28.1853C10 27.3799 10.653 26.727 11.4584 26.727L40.6647 26.727L30.4272 16.4895C29.8577 15.92 29.8577 14.9967 30.4272 14.4271C30.9967 13.8576 31.9201 13.8576 32.4896 14.4271L45.1999 27.1375C45.2113 27.1485 45.2225 27.1597 45.2335 27.171L46.248 28.1856L32.4896 41.9441Z"
                fill="white"
              />
              <path
                d="M30.4272 41.9441L30.0736 42.2976V42.2976L30.4272 41.9441ZM32.4896 41.9441L32.8431 42.2976L32.8431 42.2976L32.4896 41.9441ZM30.4272 39.8817L30.7807 40.2352L30.4272 39.8817ZM40.6652 29.6437V29.1437H41.8723L41.0187 29.9972L40.6652 29.6437ZM11.4584 29.6437V30.1437V29.6437ZM11.4584 26.727V27.227V26.727ZM40.6647 26.727L41.0182 26.3735L41.8718 27.227H40.6647V26.727ZM30.4272 16.4895L30.7807 16.136L30.7807 16.136L30.4272 16.4895ZM30.4272 14.4271L30.7807 14.7807L30.7807 14.7807L30.4272 14.4271ZM32.4896 14.4271L32.136 14.7807V14.7807L32.4896 14.4271ZM45.1999 27.1375L44.8521 27.4968L44.8464 27.4911L45.1999 27.1375ZM45.2335 27.171L44.8799 27.5246L44.8743 27.5188L45.2335 27.171ZM46.248 28.1856L46.6016 27.8321L46.9552 28.1856L46.6016 28.5392L46.248 28.1856ZM30.7807 41.5905C31.155 41.9648 31.7618 41.9648 32.136 41.5905L32.8431 42.2976C32.0784 43.0624 30.8384 43.0624 30.0736 42.2976L30.7807 41.5905ZM30.7807 40.2352C30.4065 40.6095 30.4065 41.2163 30.7807 41.5905L30.0736 42.2976C29.3089 41.5329 29.3089 40.2929 30.0736 39.5281L30.7807 40.2352ZM41.0187 29.9972L30.7807 40.2352L30.0736 39.5281L40.3116 29.2901L41.0187 29.9972ZM11.4584 29.1437L40.6652 29.1437V30.1437L11.4584 30.1437V29.1437ZM10.5 28.1853C10.5 28.7146 10.9291 29.1437 11.4584 29.1437V30.1437C10.3768 30.1437 9.50005 29.2669 9.50005 28.1853H10.5ZM11.4584 27.227C10.9291 27.227 10.5 27.6561 10.5 28.1853H9.50005C9.50005 27.1038 10.3768 26.227 11.4584 26.227V27.227ZM40.6647 27.227L11.4584 27.227V26.227L40.6647 26.227V27.227ZM30.7807 16.136L41.0182 26.3735L40.3111 27.0806L30.0736 16.8431L30.7807 16.136ZM30.7807 14.7807C30.4065 15.1549 30.4065 15.7617 30.7807 16.136L30.0736 16.8431C29.3089 16.0783 29.3089 14.8384 30.0736 14.0736L30.7807 14.7807ZM32.136 14.7807C31.7618 14.4064 31.155 14.4064 30.7807 14.7807L30.0736 14.0736C30.8384 13.3088 32.0784 13.3088 32.8431 14.0736L32.136 14.7807ZM44.8464 27.4911L32.136 14.7807L32.8431 14.0736L45.5535 26.7839L44.8464 27.4911ZM44.8743 27.5188C44.867 27.5113 44.8596 27.504 44.8522 27.4967L45.5477 26.7783C45.563 26.793 45.578 26.808 45.5927 26.8233L44.8743 27.5188ZM45.8945 28.5392L44.8799 27.5246L45.587 26.8175L46.6016 27.8321L45.8945 28.5392ZM32.136 41.5905L45.8945 27.8321L46.6016 28.5392L32.8431 42.2976L32.136 41.5905Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1901_14346">
                <rect width="56" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>
      <Slider {...settings} ref={customeSlider} className="/m-20">
        {data.allWordpressWpSlideshow.edges.reverse().map(i => {
          return (
            <div className="relative">
              <div className=" h-screen">
                <img
                  src={i.node.featured_media.source_url}
                  alt="background pic"
                  className="w-full h-full object-cover  "
                ></img>
              </div>
              <div className="absolute text bottom-16 left-0 w-full text-center">
                <div className="w-40 lg:w-60 mx-auto mb-6">
                  <img
                    src={
                      data.allWordpressAcfSlideshow.edges.filter(
                        x => x.node.wordpress_id === i.node.wordpress_id
                      )[0].node.acf.logo.localFile.childImageSharp.fluid.src
                    }
                    alt="logo"
                    className="w-full"
                  ></img>
                </div>
                <h1 className="text-white h1 max-w-6xl px-4 mx-auto mb-4 lg:mb-8">
                  {" "}
                  {
                    data.allWordpressAcfSlideshow.edges.filter(
                      x => x.node.wordpress_id === i.node.wordpress_id
                    )[0].node.acf.description
                  }
                </h1>
                <div></div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
    <div className="about text-center">
<h2 className="h2 mb-4 lg:mb-6 pt-14 lg:pt-16">About Us</h2>
<p className="body1 mx-4 mb-8 max-w-3xl mx-auto">
Delivery Hero Ventures is backed by Delivery Hero, a truly global food delivery platform - whose network, distribution and expertise can be harnessed to help our portfolio companies fulfill their global ambitions.
</p>
    </div>
    </div>
  )
}

export default Slideshow
