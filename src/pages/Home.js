import {Link} from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
// import { FaGitAlt } from "react-icons/fa";
// import {FaHtml5} from 'react-icons/fa'
// import {FaJsSquare} from 'react-icons/fa'
// import {FaNodeJs} from 'react-icons/fa'
// import {FaNpm} from 'react-icons/fa'
// import {FaReact} from 'react-icons/fa'
// // import {FaWordpressSimple} from 'react-icons/fa'
// // import {FaShopify} from 'react-icons/fa'
// import {FaFigma} from 'react-icons/fa'
// import {FaCss3Alt} from 'react-icons/fa'

// import {SiAdobeillustrator} from 'react-icons/si'
// import {SiMongodb} from 'react-icons/si'
// import {SiExpress} from 'react-icons/si'
// import {SiTailwindcss} from 'react-icons/si'
import headerImg from '../assets/images/portfolio-hero-graphic.svg'
import Nav from '../components/Nav'


const Home = () => {
  return (
    <section id='home' className="hero-bg h-screen">
      <Nav />
      <section className="hero-container flex flex-wrap items-center mx-8 md:mx-32 lg:mx-48 xl:mx-48 pb-12 z-10 ">
      <div className="hero w-full xl:w-1/2 text-center xl:text-left flex flex-col items-start">
        <h1 className='text-5xl lg:text-6xl xl:text-6xl uppercase xl:text-7xl heading-font text-neutral pb-6 text-center xl:text-left'>Building beautiful web applications.</h1>
        <p className='text-xl text-left xl:text-2xl accent-font text-center xl:text-left'>Equipped with all the technical skills to help you tackle your web developments needs.</p>
        <div className='flex w-full xl:w-2/4 justify-center xl:justify-between gap-3 text-gradient py-6'>
          <a href='https://twitter.com/sashamdesigns' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaTwitter /></a>
          <a href='https://github.com/sashamars33' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/-sasha-marshall/' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaLinkedin /></a>
          <a href='mailto:sashamarshalldesigns@gmail.com' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaRegEnvelope /></a>
          <a href='https://www.instagram.com/sashamarshall_33/' target="_blank" rel="noopener noreferrer" className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaInstagram /></a>
        </div>
        <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className="btn btn-secondary w-1/2 text-xl text-base-100 m-auto ">Learn More</Link>
      </div>
      <div className="hero-img lg:w-1/2 xl:w-1/2 md:w-3/4 w-3/4 m-auto my-6 xl:m-0">
        <img src={headerImg} alt="hero" className='w-full'/>
      </div>
    </section>

{/*        
        <div className="flex bg-secondary p-4 my-4 rounded-xl flex-wrap">
        <p className='py-8 my-4 text-primary p-4 bg-neutral rounded-xl lg:text-xl xl:text-2xl font-normal w-full'>Building full-stack applications with React, MonogoDB, Node.js, Express, and TailwindCSS. To see examples of my work, check out my projects in the projects section. If you want to know more about my skills and experience, head to the about section. 
        </p>
        <ul className="flex flex-wrap w-full justify-around md:text-4xl lg:text-4xl xl:text-5xl text-xl text-base-100">
          <li className="p-1"><FaGitAlt/></li>
          <li className="p-1"><FaCss3Alt/></li>
          <li className="p-1"><FaHtml5/></li>
          <li className="p-1"><FaJsSquare/></li>
          <li className="p-1"><SiMongodb/></li>
          <li className="p-1"><FaNodeJs/></li>
          <li className="p-1"><SiExpress/></li>
          <li className="p-1"><FaNpm/></li>
          <li className="p-1"><FaReact/></li>
          <li className="p-1"><SiTailwindcss/></li>
          <li className="p-1"><FaFigma/></li>
          <li className="p-1"><SiAdobeillustrator/></li>
        </ul>
        </div> */}
    </section>
  )
}

export default Home