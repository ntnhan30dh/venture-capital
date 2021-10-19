import React, { useRef } from "react"
import Slider from "react-slick"

const Focus2 = (props) => {
  //creating the ref
  const customeSlider = useRef()
  const settings = {
    dots: false,
    infinite: true,
    //fade: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  const card = "bg-space border-t-4 border-green p-8 mb-10"
  const title = `text-white ${props.size.h2} font-bold py-2`
  const p = `text-white ${props.size.p2} mb-8`
  const item = "bg-white py-1 xl:py-2 px-2 xl:px-3 mr-2 font-bold"

  return (
    <section  className=" relative 2xl:px-1/20 pb-20 bg-gray mt-10 ">
    <div id="focus" className="absolute -top-32" ></div>

      <h1 className={`font-bold ${props.size.h1} py-16 md:py-28 text-center`}>
        Our Focus
      </h1>
      <div className="/md:flex w-full">
        <Slider
          {...settings}
          ref={customeSlider}
          className=" xsm:mx-1/10   xl:mx-6 2xl:mx-10"
        >
          <div className="px-2 ">
            <article className={card}>
              <h2 className={title}>On demand</h2>
              <p className={p}>Enabling on-Demand Economy</p>
              <div className="items">
                <span className={item}>Quick Commerce</span>
                <br /> <br />
                <span className={item}>Online to offline</span>
                <span className={item}>Groceries</span> <br /> <br />
                <span className={item}>Catering</span>
                <span className={item}>Mobility</span>
              </div>
            </article>
          </div>

          <div className="px-2 ">

          <article className={card}>
            <h2 className={title}>Food & Kitchen 2.0</h2>
            <p className={p}>Shaping how we consume food</p>
            <div className="items">
              <span className={item}>Food technology</span>
              <span className={item}>Agri-tech</span>
              <br /> <br />
              <span className={item}>Alternative protein</span> <br /> <br />
              <span className={item}>Food Service</span>
              <span className={item}>Procurement</span>
            </div>
          </article>
          </div>

          <div className="px-2 ">

          <article className={card}>
            <h2 className={title}>Fintech</h2>
            <p className={p}>At the front of Fintech revolution</p>
            <div className="items">
              <span className={item}>Financial inclusion </span>
              <span className={item}>Loyalty</span>
              <br /> <br />
              <span className={item}>Digital payments</span>
              <span className={item}>Banking</span>
              <br /> <br />
              <span className={item}>Next generation</span>
              <span className={item}>Lending</span>
            </div>
          </article>
          </div>

          <div className="px-2">

          <article className={card}>
            <h2 className={title}>Supply chain</h2>
            <p className={p}>Deep technology capabilities</p>
            <div className="items">
              <span className={item}>Artificial intelligence </span>
              <br /> <br />
              <span className={item}>Blockchain </span>
              <span className={item}>Robotics </span> <br /> <br />
              <span className={item}>Sensors & IoT</span>
              <span className={item}>Logistics</span>
            </div>
          </article>
          </div>

        </Slider>
      </div>
    </section>
  )
}

export default Focus2
