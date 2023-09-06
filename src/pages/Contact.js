import ContactForm from '../components/ContactForm'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='connect' className="mx-48 my-24 w-full flex gap-12 justify-end">
      <div className="w-1/3 text-right">
        <p className="text-2xl text-secondary pt-24 pb-6">Want to get in touch?</p>
        <p className="text-2xl">I am always interested in new opportunities, ideas, and technologies. Send me a message with anything new!</p>
        <div className='py-6 text-primary'>
          <a href='https://twitter.com/sashamdesigns' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaTwitter /></a>
          <a href='https://github.com/sashamars33' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/-sasha-marshall/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaLinkedin /></a>
          <a href='mailto:sashamarshalldesigns@gmail.com' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaRegEnvelope /></a>
          <a href='https://www.instagram.com/sashamarshall_33/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaInstagram /></a>
        </div>
      </div>
      <div className="w-7/12">
      <h2 className='text-4xl py-3 heading-font uppercase'>Connect with Me.</h2>
      <ContactForm/>
      </div>
    </div>
  )
}

export default Contact