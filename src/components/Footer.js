import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
import {FaRegCopyright} from 'react-icons/fa'
import {Link, animateScroll as scroll} from 'react-scroll'




const Footer = () => {
  return (
    <section className='pb-3 pt-48 flex bg-footer flex flex-wrap '>
        <div className='flex flex-wrap xl:flex-row flex-col justify-between items-center mx-4 md:mx-32 lg:mx-48 xl:mx-48 w-full gap-6'>
        <div className='flex justify-center gap-6 py-4 xl:w-1/2'>
          <a href='https://twitter.com/sashamdesigns' className='text-4xl text-base-100'><FaTwitter /></a>
          <a href='https://github.com/sashamars33' className='text-4xl text-base-100'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/-sasha-marshall/' className='text-4xl text-base-100'><FaLinkedin /></a>
          <a href='mailto:sashamarshalldesigns@gmail.com' className='text-4xl text-base-100'><FaRegEnvelope /></a>
          <a href='https://www.instagram.com/sashamarshall_33/' className='text-4xl text-base-100'><FaInstagram /></a>
        </div>
            <div className='flex justify-end text-2xl uppercase text-base-100 gap-6 accent-font'>
              <Link to='projects' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className=''>Projects</Link>
              <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className=''>About</Link>
              <Link to='connect' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='text-info'>Connect</Link>
            </div>
        <p className="flex items-center m-auto gap-3 text-base-100 heading-font uppercase"><FaRegCopyright/> Sasha Marshall. All rights reserved.</p>

        </div>
    </section>
  )
}

export default Footer