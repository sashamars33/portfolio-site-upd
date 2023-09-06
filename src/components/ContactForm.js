import React from 'react'

const ContactForm = () => {
  return (
				<section className="p-1 w-full">
					<form className="form-control" name = "contact" method="post">
					<input type="hidden" name="form-name" value="contact" />
					  <label className='label heading-font uppercase' for="fname">First Name</label>
					  <input className='input gradient text-neutral' type="text" id="fname" name="firstname" placeholder="Your first name.."></input>
				  
					  <label className='label heading-font uppercase' for="lname">Last Name</label>
					  <input className='input gradient text-neutral' type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
				  
					  <label className='label heading-font uppercase' for="subject">Subject</label>
					  <select className='select gradient text-primary' id="subject" name="subject">
						<option className="text-priamry" value="webDev">Software Engineering</option>
						<option value="design">Design Projects</option>
					  </select>

					  <label className='label heading-font uppercase' for="email">Email</label>
					  <input className='input gradient text-neutral' type="text" id="email" name="email" placeholder="Your email.."></input>
					  
				  
					  <label className='label heading-font uppercase' for="details">Additonal Details</label>
					  <textarea className='textarea gradient text-neutral' id="details" name="details" placeholder="Tell me more about your future project..."></textarea>
				  
					  <input className='btn btn-md mt-6 btn-secondary text-base-100 w-1/4 m-auto' type="submit" value="Submit"></input>
				  
					</form>
				</section>
  )
}

export default ContactForm