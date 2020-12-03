import React from "react"
import { Link } from "gatsby"

const ContactComponent = () => {
  
  return (
    <div class="contact">
			<div class="container">
				<div class="text">Get in touch!</div>
			<Link class="button" to="/contact">
                CONTACT US
				</Link>
			</div>
		</div>
     
  )
}

export default ContactComponent