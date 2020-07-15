import React from "react"
import Layout from "../components/layout"
//import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
  <div id="contact" className="contact-page container">
			<div className="contact-header">
				<h1>LET'S GET IN TOUCH</h1>
			</div>
			<div className="inner-container">
				<form className="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
					<div className="form-group">
						<label for="name">MY NAME</label>
						<input name="name" type="text" className="form-control" id="name" placeholder="Name Surname"/>
					</div>
					<div className="form-group">
						<label for="email">MY EMAIL</label>
						<input name="email" type="text" className="form-control" id="email" placeholder="my@email.com"/>
					</div>
					<div className="form-group">
						<label for="company">NAME OF MY COMPANY</label>
						<input name="company" type="text" className="form-control" id="company" placeholder="Company Name"/>
					</div>
					<div className="form-group">
						<label for="company_description">DESCRIPTION OF MY COMPANY</label>
						<input name="company_description" type="text" className="form-control" id="company_description" placeholder="Max 140 characters"/>
					</div>
					<div className="form-group">
						<label for="vertical_industry">THE VERTICAL OR INDUSTRY I AM TARGETING</label>
						<input name="vertical_industry" type="text" className="form-control" id="vertical_industry" placeholder="Delivery, Foodtech, Fintech..."/>
					</div>
					<div className="form-group">
						<label for="website">MY WEBSITE</label>
						<input name="website" type="text" className="form-control" id="website" placeholder="www.mywebsite.com"/>
					</div>
					<div className="form-group">
						<label for="company_stage">MY COMPANY IS IN STAGE</label>
						<input name="company_stage" type="text" className="form-control" id="company_stage" placeholder="Stage of the company"/>
					</div>
					<div className="form-group">
						<label for="raising">I AM RAISING (€) </label>
						<input name="raising" type="text" className="form-control" id="raising" placeholder="my@email.com"/>
					</div>
					<div className="form-group">
						<label for="location">MY COMPANY IS LOCATED IN</label>
						<input name="location" type="text" className="form-control" id="location" placeholder="Country"/>
					</div>
					<div className="form-group">
						<label for="message">MY MESSAGE</label>
						<input name="message" type="text" className="form-control" id="message" placeholder="Max 140 Characters"/>
					</div>	
			<div className="submit-button"  role="button" type="submit">
			<button className="button"  type="submit">
			SUBMIT
			</button>
			</div>
				</form>
			</div>
		</div>
  </Layout>
)

export default ContactPage
