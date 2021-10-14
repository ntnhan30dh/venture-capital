import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import pic from "../images/mission_pic.png"

const Mission2 = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressAcfMission {
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
    <section  className="missionWrapper">
      <div className="imgDiv w-full hidden sm:block">
        <img src={pic} alt="mission" className="w-full" />
      </div>

      <div className="imgMobile w-full h-70vh bg-mission sm:hidden">

      </div>
      <div className="text w-full text-center p-10 md:py-20 bg-gray" id="mission">
        <h1 className="font-bold text-4xl sm:text-5xl p-6 sm:p-10">Our Mission</h1>
        <p className=" mx-auto text-lg xxsm:text-xl sm:text-2xl text-center p-2 sm:w-2/3 md:w-1/2 lg:px-16 leading-12">
          DX Ventures' mission is to support the next generation of 
          <span className="font-bold"> founder-led technology companies </span>{" "}
          that are disrupting  some of the most fast-moving industries
          around the world.
        </p>

        {/* <p className=" sm:hidden mx-auto text-xl text-center p-6 leading-loose">
          DX Ventures' mission is to support the next generation of
          <span className="font-bold"> founder-led <br />{" "} technology companies </span>{" "}
          that are <br /> disrupting  some of the most fast-moving industries
          around the world.
        </p> */}
      </div>
    </section>
  )
}

export default Mission2
