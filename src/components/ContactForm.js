import React from 'react'

const ContactForm = () => {
  return (
				<section className="bg-neutral p-4 rounded-lg lg:w-3/4 lg:m-auto xl:w-3/4 xl:m-auto">
					<form className="form-control" name = "contact" method="post">
					<input type="hidden" name="form-name" value="contact" />
					  <label className='label' for="fname">First Name</label>
					  <input className='input' type="text" id="fname" name="firstname" placeholder="Your name.."></input>
				  
					  <label className='label' for="lname">Last Name</label>
					  <input className='input' type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
				  
					  <label className='label' for="subject">Subject</label>
					  <select className='select' id="subject" name="subject">
						<option value="webDev">Software Engineering</option>
						<option value="design">Design Projects</option>
					  </select>

					  <label className='label' for="email">Email</label>
					  <input className='input' type="text" id="email" name="email" placeholder="Your email.."></input>
					  
				  
					  <label className='label' for="details">Additonal Details</label>
					  <textarea className='textarea' id="details" name="details" placeholder="Tell me more about your future project..."></textarea>
				  
					  <input className='btn btn-rounded btn-ghost mt-4' type="submit" value="Submit"></input>
				  
					</form>
				</section>
  )
}

export default ContactForm