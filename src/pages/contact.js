import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
  <form name="contact" action="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  {/* <div id="contact" class="contact-page container">
			<div class="contact-header">
				<h1>LET'S GET IN TOUCH</h1>
			</div>
			<div class="inner-container">
				<form class="form" name="contact" method="POST" data-netlify="true">
					<div class="form-group">
						<label for="name">MY NAME</label>
						<input name="name" type="text" class="form-control" id="name" placeholder="Name Surname"/>
					</div>
					<div class="form-group">
						<label for="name">MY EMAIL</label>
						<input name="name" type="text" class="form-control" id="name" placeholder="my@email.com"/>
					</div>
					<div class="form-group">
						<label for="name">NAME OF MY COMPANY</label>
						<input name="company" type="text" class="form-control" id="name" placeholder="Company Name"/>
					</div>
					<div class="form-group">
						<label for="name">DESCRIPTION OF MY COMPANY</label>
						<input name="company_description" type="text" class="form-control" id="name" placeholder="Max 140 characters"/>
					</div>
					<div class="form-group">
						<label for="name">THE VERTICAL OR INDUSTRY I AM TARGETING</label>
						<input name="vertical_industry" type="text" class="form-control" id="name" placeholder="Delivery, Foodtech, Fintech..."/>
					</div>
					<div class="form-group">
						<label for="name">MY WEBSITE</label>
						<input name="website" type="text" class="form-control" id="name" placeholder="www.mywebsite.com"/>
					</div>
					<div class="form-group">
						<label for="name">MY COMPANY IS IN STAGE</label>
						<input name="company_stage" type="text" class="form-control" id="name" placeholder="Stage of the company"/>
					</div>
					<div class="form-group">
						<label for="name">I AM RAISING (€) </label>
						<input name="raising" type="text" class="form-control" id="name" placeholder="my@email.com"/>
					</div>
					<div class="form-group">
						<label for="name">MY COMPANY IS LOCATED IN</label>
						<input name="location" type="text" class="form-control" id="name" placeholder="Country"/>
					</div>
					<div class="form-group">
						<label for="name">MY MESSAGE</label>
						<input name="message" type="text" class="form-control" id="name" placeholder="Max 140 Characters"/>
					</div>	
			<button class="submit-button"  type="submit">
			SUBMIT
			</button>
				</form>
			</div>
		</div> */}
  </Layout>
)

export default ContactPage
