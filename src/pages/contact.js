import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
  <div id="contact" class="contact-page container">
			<div class="contact-header">
				<h1>LET'S GET IN TOUCH</h1>
			</div>
			<div class="inner-container">
				<form class="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
					<div class="form-group">
						<label for="name">MY NAME</label>
						<input name="name" type="text" class="form-control" id="name" placeholder="Name Surname"/>
					</div>
					<div class="form-group">
						<label for="email">MY EMAIL</label>
						<input name="email" type="text" class="form-control" id="name" placeholder="my@email.com"/>
					</div>
					<div class="form-group">
						<label for="company">NAME OF MY COMPANY</label>
						<input name="company" type="text" class="form-control" id="name" placeholder="Company Name"/>
					</div>
					<div class="form-group">
						<label for="company_description">DESCRIPTION OF MY COMPANY</label>
						<input name="company_description" type="text" class="form-control" id="name" placeholder="Max 140 characters"/>
					</div>
					<div class="form-group">
						<label for="vertical_industry">THE VERTICAL OR INDUSTRY I AM TARGETING</label>
						<input name="vertical_industry" type="text" class="form-control" id="name" placeholder="Delivery, Foodtech, Fintech..."/>
					</div>
					<div class="form-group">
						<label for="website">MY WEBSITE</label>
						<input name="website" type="text" class="form-control" id="name" placeholder="www.mywebsite.com"/>
					</div>
					<div class="form-group">
						<label for="company_stage">MY COMPANY IS IN STAGE</label>
						<input name="company_stage" type="text" class="form-control" id="name" placeholder="Stage of the company"/>
					</div>
					<div class="form-group">
						<label for="raising">I AM RAISING (€) </label>
						<input name="raising" type="text" class="form-control" id="name" placeholder="my@email.com"/>
					</div>
					<div class="form-group">
						<label for="location">MY COMPANY IS LOCATED IN</label>
						<input name="location" type="text" class="form-control" id="name" placeholder="Country"/>
					</div>
					<div class="form-group">
						<label for="message">MY MESSAGE</label>
						<input name="message" type="text" class="form-control" id="name" placeholder="Max 140 Characters"/>
					</div>	
			<div class="submit-button" role="button" type="submit">
			SUBMIT
			</div>
				</form>
			</div>
		</div>
  </Layout>
)

export default ContactPage
