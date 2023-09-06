import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
import {Link, animateScroll as scroll} from 'react-scroll'




const Footer = () => {
  return (
    <section className='pb-3 pt-48 flex bg-footer h-64'>
        <div className='flex w-full justify-around mx-48 py-4'>
          <a href='https://twitter.com/sashamdesigns' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaTwitter /></a>
          <a href='https://github.com/sashamars33' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/-sasha-marshall/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaLinkedin /></a>
          <a href='mailto:sashamarshalldesigns@gmail.com' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaRegEnvelope /></a>
          <a href='https://www.instagram.com/sashamarshall_33/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaInstagram /></a>
        </div>
        <div className='flex px-2 mx-2 pt-8 w-full justify-between'>
            <div className='flex justify-end'>
              <Link to='projects' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>Projects</Link>
              <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>About</Link>
              <Link to='connect' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>Connect</Link>
            </div>
        </div>
    </section>
  )
}

export default Footer