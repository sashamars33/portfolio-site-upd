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

const About = () => {
  return (
    <div id='about' className='my-32 mx-8 md:mx-32 lg:mx-48 xl:mx-48 p-8 flex gap-12 xl:flex-no-wrap flex-wrap'>
      {/* <img src={profileImg} alt='Portrait of Sasha Marshall' className='w-3/4 justify-self-end rounded-full col-start-1 col-end-4 row-start-1 row-end-2 mb-8'></img> */}
      <div className='about-card w-full xl:w-5/12 flex flex-col justify-center items-center gap-3'>
        <img src={aboutDeco} alt="decoration for about section." className="w-5/12 m-auto" />
        <h3 className="text-center text-2xl text-primary uppercase">About Sasha</h3>
        <h2 className="heading-font uppercase text-4xl text-center">Software Engineer & Designer</h2>
        <div className="technologies w-full">
        <ul className="flex flex-wrap w-2/3 m-auto justify-around md:text-2xl lg:text-3xl xl:text-3xl text-xl text-info text-opacity-60">
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
        <a href='#' className="btn btn-lg btn-secondary text-base-100 justify-self-center self-center">Download Resume</a>
      </div>
      <div className="w-full xl:w-1/2 text-center xl:text-left">
      <p className='py-3 text-xl xl:text-2xl accent-font'>I began working as a software engineer in early 2022 after being introduced to a training agency known as 100 devs. While spending time there I built up my skills by building personal projects indivdually and on teams. I also contracted freelance work during this time building sites for small businesses.</p>
      <p className='text-xl xl:text-2xl accent-font'>I am currently open to positions as a full-stack, front-end, or back-end engineer. My main technologies are React, MongoDB, Express, Node, HTML/CSS, JavaScript, and TailwindCSS. I also have substaintial experience with design softwares such as Photoshop, Illustrator, Figma, and Procreate. Moving forward I am looking to expand my skills in a variety of areas to find my passion in tech.</p>
      </div>
    </div>
  )
}

export default About