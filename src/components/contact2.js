import React from "react"
import { Link } from "gatsby"

const Contact2 = (props) => {
  return (
    <div class="contact" id="contact">
      <div class="container2 pb-20">
        <div className="textWrap text-center text-white">
			<div className="opacity-0">hi</div>
          <h1 className={` ${props.size.h1} font-bold my-16 md:my-28`}>Contact us</h1>
          <div className={props.size.p}>
            <p>We are looking forward to hearing from you!</p>
            <p className="my-6">Please reach out to us at <span className="font-bold underline hover:text-green">  info@dxventures.vc </span> </p>
            <p>
            Please note, if you are seeking funding, <br /> include a pitch deck to your email. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact2
