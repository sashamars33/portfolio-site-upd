import React, { useState } from 'react'

const ContactForm = () => {


  return (
				<section className="p-1 w-full">
					<form className="form-control" name="contact" method="POST" data-netlify="true">
					<input type="hidden" name="form-name" value="contact" />
					  <label className='label heading-font uppercase' htmlFor="fname">First Name</label>
					  <input required className='input gradient text-neutral' type="text" id="fname" name="firstname" placeholder="Your first name.."></input>
				  
					  <label className='label heading-font uppercase' htmlFor="lname">Last Name</label>
					  <input required className='input gradient text-neutral' type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

					  <label className='label heading-font uppercase' htmlFor="email">Email</label>
					  <input required className='input gradient text-neutral' type="text" id="email" name="email" placeholder="Your email.."></input>
					  
				  
					  <label className='label heading-font uppercase' htmlFor="details">Additonal Details</label>
					  <textarea required className='textarea gradient text-neutral' id="details" name="details" placeholder="Tell me more about your future project..."></textarea>
				  
					  <button className='btn btn-md mt-6 btn-secondary text-base-100 w-1/4 m-auto' type="submit" value="Submit">Submit</button>
				  
					</form>
				</section>
  )
}

export default ContactForm