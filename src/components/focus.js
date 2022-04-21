import React from "react"
//import Carousel from 'react-spring-3d-carousel';
import {Carousel} from '3d-react-carousal';

import internet from "../images/focus_internet.png"
import fintech from "../images/focus_fintech.png"
import b2b from "../images/focus_b2b.png"

const Focus = () => {
  const pic = {
    "internet" : internet,
    "fintech" : fintech,
    "b2b" : b2b,
  }
  const number = {
    "internet" : 1,
    "b2b" : 2,
    "fintech" : 3,
  }

  const name = {
    "internet" : "Internet",
    "fintech" : "Fintech",
    "b2b" : "B2B",}


  const p = {
    "internet" : "E-commerce, marketplaces, direct to consumer",
    "fintech" : "Digital payments, financial inclusion",
    "b2b" : "Digital enablement, food supply chain, retail automation",}
  const card = props => {
    return (
      <div
        className={`internet relative w-343 lg:w-400 overflow-hidden text-white mx-3`}
      >
        <div
          className={`internet transform ease-linear duration-75 hover:scale-125`}
        >
          <img src={pic[props]} alt="internet" />
        </div>
        <div className="absolute top-6 left-6 flex  items-center text-white">
          <div className="-mb-1 lg:-mb-3 mr-1">
            <div className="w-2.5 lg:w-3.5">
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.61797 14L13 0H7.45323L2 14H7.61797Z" fill="white" />
              </svg>
            </div>
          </div>
          <h3 className="h3_strengths"> {number[props]} </h3>
        </div>
        <div className="textBottom absolute left-6 bottom-12 mr-4">
          <h1 className="h1 mb-4 lg:mb-6">{name[props]}</h1>
          <p className="body1 my-2"> {p[props]}</p>
        <div className="w-full h-0.5 bg-white opacity-20 /absolute bottom-0 left-0 "> </div>
        </div>

      </div>
    )
  }

  let slides = [
    card("internet"),
    card("b2b"),
    card("fintech"),
      ];
  const caro = () => {
    if( typeof window !== 'undefined'){
      return  <Carousel slides={slides} autoplay={false} interval={500} arrows={false}   />
    }
  }
  return (
    
    <section id="focus" className="focus">
      <h2 className="h2 text-center  pt-14 lg:pt-20  pb-8 lg:mb-40">
        Our Focus
      </h2>
      <div className="cards hidden lg:flex justify-center">
      {card("internet")}
      {card("b2b")}
      {card("fintech")}
      </div>
      <div className="lg:hidden">    
     { caro()}
      </div>
    </section>
  )
}

export default Focus
