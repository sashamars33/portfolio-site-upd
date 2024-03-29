// import profileImg from '../assets/images/sasha-img.jpeg'
import aboutDeco from '../assets/images/about-deco.svg'
import { FaGitAlt } from "react-icons/fa";
import {FaHtml5} from 'react-icons/fa'
import {FaJsSquare} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaNpm} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaWordpressSimple} from 'react-icons/fa'
import {FaShopify} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaSass} from 'react-icons/fa'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {FaElementor} from 'react-icons/fa'
import Resume from '../assets/images/Sasha-Marshall-Resume-2023.pdf'

const About = () => {


  const imgBGStyle = {
    background: `url(${aboutDeco}) no-repeat center`,
    backgroundSize: 'contain',
  };

  return (
    <div id='about' className='my-32 mx-2 md:mx-32 lg:mx-48 xl:mx-48 p-8 flex gap-12 xl:flex-no-wrap flex-wrap items-center'>
      {/* <img src={profileImg} alt='Portrait of Sasha Marshall' className='w-3/4 justify-self-end rounded-full col-start-1 col-end-4 row-start-1 row-end-2 mb-8'></img> */}
      <div className='about-card w-full xl:w-6/12 flex flex-col justify-center items-center gap-3 py-24' style={imgBGStyle}>
        {/* <img src={aboutDeco} alt="decoration for about section." className="w-6/12 m-auto" /> */}
        <h3 className="text-center text-2xl lg:text-3xl xl:text-3xl uppercase tracking-wide">About Sasha</h3>
        <h2 className="heading-font uppercase text-xl lg:text-2xl xl:text-2xl text-center">Software Engineer & Designer</h2>
        <div className="technologies w-full">
        <ul className="flex flex-wrap w-8/12 xl:w-2/3 m-auto justify-around md:text-2xl lg:text-3xl xl:text-3xl text-2xl text-white">
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
          <li className="p-1"><FaWordpressSimple/></li>
          <li className="p-1"><FaShopify/></li>
          <li className="p-1"><FaPython/></li>
          <li className="p-1"><FaElementor/></li>
        </ul>
        </div>
        <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary text-base-100 justify-self-center self-center">Download Resume</a>
      </div>
      <div className="w-full xl:w-5/12 text-center xl:text-left">
      <p className='py-3 text-lg xl:text-lg accent-font'>Hello! My name is Sasha and I’m a Software Engineer who embodies ambition, attention to detail, and a passion for problem solving. I love building web applications and have a deep love for learning.</p>
      <p className='py-3 text-lg xl:text-lg accent-font'>Currently working with Akantro, Condor Growth Group, and Matthew Brown Consulting specializing in Frontend and Full Stack Development.</p>
      <p className='py-3 text-lg xl:text-lg accent-font'>In my free time I enjoy painting, hiking, and learning anything new! I am always open to new opportunities and connections. Want to get in touch? Reach out to me on socials or through my contact form! </p>
      </div>
    </div>
  )
}

export default About