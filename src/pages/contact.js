import React from "react"
import Layout from "../components/layout"


const ContactPage = () => {
  return (
    <Layout>
      <div id="contact" className="contact-page container">
        <div className="contact-header">
          <h1>GET IN TOUCH</h1>
        </div>
        <div className="inner-container">
          <h2>
            We are looking forward to hearing from you. Please reach out to us
            at {" "}
            <span>
              <a href="mailto:info@dxventures.vc">info@dxventures.vc</a>
            </span>
            . To note, if you are seeking funding, please include a pitch deck.
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
