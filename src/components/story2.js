import React, { useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"

import pic1 from "../images/story_pic1.png"
import pic2 from "../images/story_pic2.png"
import pic3 from "../images/story_pic3.png"


const Story2 = () => {
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

  //creating the ref
  const customeSlider = useRef()
  // const gotoNext = () => {
  //   customeSlider.current.slickNext()
  // }

  // const gotoPrev = () => {
  //   customeSlider.current.slickPrev()
  // }

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
  }
  const slick = "w-full flex bg-gray"
  const imgDiv = "w-1/2"
  const text = "w-1/2 m-auto "
  const p = "m-auto text-2xl text-center p-10 leading-loose  "
  return (
    <section id="story" className="w-full">
      <h1 className="font-bold text-5xl p-10  text-center">Our Story</h1>
      <div className="sliderWrap py-10 px-1/10">
        <Slider {...settings} ref={customeSlider} className=" ">
          <div>
            <div className={slick}>
              <div className={imgDiv}>
                <img src={pic1} alt="" />
              </div>
              <div className={text}>
                <p className={p}>
                  At DX Ventures, we recognise that <span className='font-bold'> entrepreneurs <br /> are the true
                  heroes </span> , and we aim to support them in <br /> achieving their
                  ambitions on the world stage.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={slick}>
              <div className={text}>
                <p className={p}>
                We seek to leverage global insights alongside <br /> our local know how, to <span className="font-bold"> help founders grow <br /> outstanding companies.</span> 
                </p>
              </div>
              <div className={imgDiv}>
                <img src={pic2} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className={slick}>
              <div className={imgDiv}>
                <img src={pic3} alt="" />
              </div>
              <div className={text}>
                <p className={p}>
                DX Ventures is backed by Delivery Hero, a truly global food  technology company whose network, <br /> distribution and expertise can be harnessed to <span className="font-bold"> help <br /> our companies fulfil their global ambitions. </span> 
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Story2
