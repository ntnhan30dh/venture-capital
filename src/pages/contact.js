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

// const handleAttachment = (e) => {
//   setState({ ...state, [e.target.name]: e.target.files[0] })
// }

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
            <label htmlfor="name">NAME</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Jane Doe"
			  onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlfor="company">COMPANY</label>
            <input
              name="company"
              type="text"
              className="form-control"
              id="company"
              placeholder="Leave it empty if you don't have a name"
			  onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlfor="company_description">COMPANY DESCRIPTION</label>
            <input
              name="company_description"
              type="text"
              className="form-control"
              id="company_description"
              placeholder="Shortly describe your company"
			  onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlfor="telephone">
            TELEPHONE
            </label>
            <input
              name="telephone"
              type="text"
              className="form-control"
              id="telephone"
              placeholder="+59 001122334455"
			  onChange={handleChange}
            />
          </div>


          <div className="form-group">
            <label htmlfor="email">EMAIL</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="email"
              placeholder="Your email address"
			  onChange={handleChange}
            />
          </div>
     
         
         
          <div className="form-group">
            <label htmlfor="website">WEBSITE</label>
            <input
              name="website"
              type="text"
              className="form-control"
              id="website"
              placeholder="Your website"
			  onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlfor="message">MY MESSAGE</label>
            <input
              name="message"
              type="text"
              className="form-control"
              id="message"
              placeholder="Please, tell us about your project ..."
			  onChange={handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label for="file">UPLOAD A DOCUMENT</label>
            <input name="file" type="file" className="" id="file" onChange={handleAttachment}/>
          </div> */}
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
