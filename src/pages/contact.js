import React from "react"
import Layout from "../components/layout"
import { navigate } from 'gatsby-link'

//import SEO from "../components/seo"
function encode(data) {
	const formData = new FormData()
  
	for (const key of Object.keys(data)) {
	  formData.append(key, data[key])
	}
  
	return formData
  }
  
const ContactPage = () => {
	const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

const handleAttachment = (e) => {
  setState({ ...state, [e.target.name]: e.target.files[0] })
}

const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target
  fetch('/', {
	method: 'POST',
	body: encode({
	  'form-name': form.getAttribute('name'),
	  ...state,
	}),
  })
	.then(() => navigate(form.getAttribute('action')))
	.catch((error) => alert(error))
}

	return(
  <Layout>
    <div id="contact" className="contact-page container">
      <div className="contact-header">
        <h1>GET IN TOUCH</h1>
      </div>
      <div className="inner-container">
        <form
		className="form"
		name="contact"
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        >
		<input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
          <div className="form-group">
            <label for="name">MY NAME</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Name Surname"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="email">MY EMAIL</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="email"
              placeholder="my@email.com"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="company">NAME OF MY COMPANY</label>
            <input
              name="company"
              type="text"
              className="form-control"
              id="company"
              placeholder="Company Name"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="company_description">DESCRIPTION OF MY COMPANY</label>
            <input
              name="company_description"
              type="text"
              className="form-control"
              id="company_description"
              placeholder="Max 140 characters"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="vertical_industry">
              THE VERTICAL OR INDUSTRY I AM TARGETING
            </label>
            <input
              name="vertical_industry"
              type="text"
              className="form-control"
              id="vertical_industry"
              placeholder="Delivery, Foodtech, Fintech..."
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="website">MY WEBSITE</label>
            <input
              name="website"
              type="text"
              className="form-control"
              id="website"
              placeholder="www.mywebsite.com"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="company_stage">MY COMPANY IS IN STAGE</label>
            <input
              name="company_stage"
              type="text"
              className="form-control"
              id="company_stage"
              placeholder="Stage of the company"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="raising">I AM RAISING (€) </label>
            <input
              name="raising"
              type="text"
              className="form-control"
              id="raising"
              placeholder="amount in €"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="location">MY COMPANY IS LOCATED IN</label>
            <input
              name="location"
              type="text"
              className="form-control"
              id="location"
              placeholder="Country"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="message">MY MESSAGE</label>
            <input
              name="message"
              type="text"
              className="form-control"
              id="message"
              placeholder="Max 140 Characters"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="file">UPLOAD A DOCUMENT</label>
            <input name="file" type="file" className="" id="file" onChange={handleAttachment}/>
          </div>
          <div className="submit-button" role="button" type="submit">
            <button className="button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
    <footer id="footer" className="footer container">
      <div className="footer-footer">
        Copyright© 2020 Delivery Hero SE
        <br />
        <br />
        Here impressum and disclaimers as by law.
      </div>
    </footer>
  </Layout>
)}

export default ContactPage
