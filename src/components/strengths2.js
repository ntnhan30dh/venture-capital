import React, { useRef } from "react"
import Slider from "react-slick"

import global_founder_network from "../images/strengths__global_founder_network.png"
import platform from "../images/strengths_platform.png"
import globalApproach from "../images/strengths_globalApproach.png"
import invest from "../images/strengths_invest.png"
import support from "../images/strengths_support.png"
import active from "../images/strengths_active.png"
import founder from "../images/strengths_founder.png"

const Strengths2 = (props) => {

 
  const card = "w-1/4 text-center px-10 md:px-3 lg:px-6 2xl:px-8 mb-6"
  const icon = "w-14 mx-auto"
  const title = `${props.size.h2} font-bold text-black leading-normal py-6`
  const p = props.size.p2
  

   //creating the ref
   const customeSlider = useRef()
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 4000,
 
     responsive: [
     ],
   }
  
  return (
    <section className=" relative my-10 sm:my-20">
    <div id="strengths" className="absolute -top-32" ></div>

      <h1 className={`font-bold ${props.size.h1} p-10 text-center`}>Our Strengths</h1>
      <div className="cards mx-4 lg:mx-20  hidden md:block">
        <div className="row flex justify-center 2xl:mx-20 my-20">
          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network} alt="" className="w-full" />
            </div>
            <h2 className={title}>
              Global founder <br /> network
            </h2>
            <p className={p}>
              Our network of experienced company founders are available to advise
              and assist portfolio companies on their journey.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={platform} alt="platform" className="w-full" />
            </div>
            <h2 className={title}>
              Leveraging Delivery <br /> Hero’s platform{" "}
            </h2>
            <p className={p}>
              Delivery Hero’s global platform helps us to identify, qualify and
              add value to our investee companies, both in terms of global
              insights and local know-how.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img
                src={globalApproach}
                alt="globalApproach"
                className="w-full"
              />
            </div>
            <h2 className={title}>
              Global approach and mindset <br />{" "}
            </h2>
            <p className={p}>
              Our team brings an international mindset and diverse global
              experience, and is well positioned to identify opportunities
              wherever they arise.
            </p>
          </article>
        </div>

        <div className="row flex justify-around">
          <article className={card}>
            <div className={icon}>
              <img src={invest} alt="invest" className="w-full" />
            </div>
            <h2 className={title}>
              Flexible investment mandate <br />{" "}
            </h2>
            <p className={p}>
              A broad investment mandate gives flexibility to invest across
              sectors, stages and geographies, as well as providing follow-on
              funding.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={support} alt="support" className="w-full" />
            </div>
            <h2 className={title}>
              Support through the lifecycle <br />{" "}
            </h2>
            <p className={p}>
              From start-up to IPO, we seek to support the most promising
              companies at critical stages of their development, with capacity
              to participate in multiple funding rounds.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={active} alt="active" className="w-full" />
            </div>
            <h2 className={title}>
              Active value <br /> creation {" "}
            </h2>
            <p className={p}>
              Our network of experienced company founders are available to advise
              and assist portfolio companies on their journey.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={founder} alt="founder" className="w-full" />
            </div>
            <h2 className={title}>
              Founder-centric philosophy <br />
            </h2>
            <p className={p}>
              We believe in creating a long- term partnership with founders to
              grow successful and sustainable businesses.
            </p>
          </article>
        </div>
      </div>

      <div className="sliderWrap md:hidden">

      <Slider
          {...settings}
          ref={customeSlider}
          className=" xsm:mx-1/5   my-10"
        >
        <article className={card}>
            <div className={icon}>
              <img src={global_founder_network} alt="" className="w-full" />
            </div>
            <h2 className={title}>
              Global founder <br /> network
            </h2>
            <p className={p}>
              Our network of experienced company founders are available to advise
              and assist portfolio companies on their journey.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={platform} alt="platform" className="w-full" />
            </div>
            <h2 className={title}>
              Leveraging Delivery <br /> Hero’s platform{" "}
            </h2>
            <p className={p}>
              Delivery Hero’s global platform helps us to identify, qualify and
              add value to our investee companies, both in terms of global
              insights and local know-how.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img
                src={globalApproach}
                alt="globalApproach"
                className="w-full"
              />
            </div>
            <h2 className={title}>
              Global approach and mindset <br />{" "}
            </h2>
            <p className={p}>
              Our team brings an international mindset and diverse global
              experience, and is well positioned to identify opportunities
              wherever they arise.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={invest} alt="invest" className="w-full" />
            </div>
            <h2 className={title}>
              Flexible investment mandate <br />{" "}
            </h2>
            <p className={p}>
              A broad investment mandate gives flexibility to invest across
              sectors, stages and geographies, as well as providing follow-on
              funding.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={support} alt="support" className="w-full" />
            </div>
            <h2 className={title}>
              Support through the lifecycle <br />{" "}
            </h2>
            <p className={p}>
              From start-up to IPO, we seek to support the most promising
              companies at critical stages of their development, with capacity
              to participate in multiple funding rounds.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={active} alt="active" className="w-full" />
            </div>
            <h2 className={title}>
              Active value creation <br />{" "}
            </h2>
            <p className={p}>
              Our network of experienced company founders are available to advise
              and assist portfolio companies on their journey.
            </p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={founder} alt="founder" className="w-full" />
            </div>
            <h2 className={title}>
              Founder-centric philosophy <br />
            </h2>
            <p className={p}>
              We believe in creating a long- term partnership with founders to
              grow successful and sustainable businesses.
            </p>
          </article>

        </Slider>

        </div>
<div className="opacity-0"> hi</div>
    </section>
  )
}

export default Strengths2
