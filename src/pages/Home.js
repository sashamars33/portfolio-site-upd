import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'
import { FaGitAlt } from "react-icons/fa";
import {FaHtml5} from 'react-icons/fa'
import {FaJsSquare} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaNpm} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
// import {FaWordpressSimple} from 'react-icons/fa'
// import {FaShopify} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'

import {SiAdobeillustrator} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
// import headerImg from '../assets/images/header.png'

const Home = () => {
  return (
    <section id='home'>
        <h1 className='text-5xl uppercase xl:text-6xl'>Sasha Marshall</h1>
        <h3 className='text-3xl text-secondary uppercase text-left xl:text-4xl'>Software Engineer & Designer</h3>
        <div className='flex w-full justify-around bg-neutral rounded-xl text-secondary py-4 mt-2 mb-8'>
          <a href='https://twitter.com/sashamdesigns' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaTwitter /></a>
          <a href='https://github.com/sashamars33' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/-sasha-marshall/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaLinkedin /></a>
          <a href='mailto:sashamarshalldesigns@gmail.com' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaRegEnvelope /></a>
          <a href='https://www.instagram.com/sashamarshall_33/' className='btn btn-ghost btn-sm rounded-btn text-3xl'><FaInstagram /></a>
        </div>
        <div className="flex bg-secondary p-4 my-4 rounded-xl flex-wrap">
        <p className='py-8 my-4 text-primary p-4 bg-neutral rounded-xl lg:text-xl xl:text-2xl font-normal w-full'>Building full-stack applications with React, MonogoDB, Node.js, Express, and TailwindCSS. To see examples of my work, check out my projects on the projects page. If you want to know more about my skills and experience, head to my about page. 
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
        </div>
    </section>
  )
}

export default Home