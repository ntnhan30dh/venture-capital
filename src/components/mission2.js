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
      <div className="imgDiv w-full">
        <img src={pic} alt="mission" className="w-full" />
      </div>
      <div className="text w-full text-center p-10 bg-gray" id="mission">
        <h1 className="font-bold text-5xl p-10">Our Mission</h1>
        <p className=" mx-auto text-2xl text-center p-10 leading-loose">
          DX Ventures' mission is to support the next generation of <br />{" "}
          <span className="font-bold"> founder-led technology companies </span>{" "}
          that are disrupting <br /> some of the most fast-moving industries
          around the world.
        </p>
      </div>
    </section>
  )
}

export default Mission2
