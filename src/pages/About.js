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
  return (
    <div id='about' className='my-32 mx-2 md:mx-32 lg:mx-48 xl:mx-48 p-8 flex gap-12 xl:flex-no-wrap flex-wrap items-center'>
      {/* <img src={profileImg} alt='Portrait of Sasha Marshall' className='w-3/4 justify-self-end rounded-full col-start-1 col-end-4 row-start-1 row-end-2 mb-8'></img> */}
      <div className='about-card w-full xl:w-5/12 flex flex-col justify-center items-center gap-3'>
        <img src={aboutDeco} alt="decoration for about section." className="w-6/12 m-auto" />
        <h3 className="text-center text-xl lg:text-2xl xl:text-2xl text-primary uppercase">About Sasha</h3>
        <h2 className="heading-font uppercase text-3xl lg:text-3xl xl:text-4xl text-center">Software Engineer & Designer</h2>
        <div className="technologies w-full">
        <ul className="flex flex-wrap w-8/12 xl:w-2/3 m-auto justify-around md:text-2xl lg:text-3xl xl:text-3xl text-2xl text-info text-opacity-60">
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
      <div className="w-full xl:w-6/12 text-center xl:text-left">
      <p className='py-3 text-lg xl:text-lg accent-font'>Sasha is a talented engineer who began her software career at the 100devs agency where she working closely with colleagues and mentors to develop essential engineering skills. During her time there, she ventured into the world of freelancing and contract work, which gave futher opportunity to refine her skills.</p>
      <p className='py-3 text-lg xl:text-lg accent-font'>After her experience at 100Devs, Sasha started a contract role with Akantro and Matthew Brown Consulting. At Akantro, she harnesses her web development and design abilities to build web components for a number of e-commerce clients while aslo maintaing client relations and communications with her remote team. Sasha's daily toolkit includes Shopify Liquid, HTML/CSS, Vanilla JS, and Tailwind CSS, fortifying her understanding of building and maintaining e-commerce websites for a range of businesses.</p>
      <p className='py-3 text-lg xl:text-lg accent-font'>Simultaneously, Sasha collaborated with a great team of engineers at Matthew Brown Consulting on a routing application for a San Francisco-based company. In this role, she showcases her proficiency in React, Node, MongoDB, Express, and Tailwind, focusing on developing the desktop dashboard component of the application. Her role also includes contributing to the seamless connectivity between the desktop and mobile aspects of the project, ensuring a cohesive user experience.</p>
      <p className='text-lg xl:text-lg accent-font'>
      With a commitment to growth, Sasha is constantly looking to the future. She is poised to continue expanding her skill set through a diverse array of projects and remains open to opportunities that enable her to be at forefront of emerging technologies.
</p>
      </div>
    </div>
  )
}

export default About