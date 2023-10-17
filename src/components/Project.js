import {useState, useEffect} from 'react'
import SNSS from '../assets/images/sticky-notes-ss.png'
import NPGSS from '../assets/images/nature-photo-ss.png'
import TTPSS from '../assets/images/thelma-ss.png'
import SMSSS from '../assets/images/sm-ss.png'
import SMSS from '../assets/images/SMSS.png'
import APTSS from '../assets/images/avanti-ss.png'
import DDKSS from '../assets/images/daydaykay-ss.png'
import DJCSS from '../assets/images/DJCSS.png'
import ADSS from '../assets/images/ADSS.png'
import BARSS from '../assets/images/BARSS.png'

import {BsArrowDown} from 'react-icons/bs'
import {BsArrowUp} from 'react-icons/bs'


// import { Link } from 'react-router-dom'


const Project = () => {

  const [show, setShow] = useState(false);

  return (
    <>
    <section className=' grid grid-cols-1 items-center mx-0 md:mx-32 lg:mx-48 xl:mx-48 pb-12'>
    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | Node | Express | MongoDB | TailwindCSS</h3>
      <h2 className='text-4xl heading-font uppercase'>Sticky Notes</h2>
      <p className='text-neutral text-lg accent-font'>A full stack organization app that brings sticky notes to the virtual world. With this app you can create topic boards and add corresponding notes to the board. Site is nearly completed and will be ready for demo by the end of the month!</p>
      <a href="https://stickynotes-organization.netlify.app/" rel="noopener noreferrer" target="_blank" className="btn btn-secondary w-1/3">Visit</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={SNSS} alt='Avanti Physical Therapy Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | Node | Express | MongoDB | TailwindCSS | Mapbox</h3>
      <h2 className='text-4xl heading-font uppercase'>Application Dashboard - Bay Area Restaurant Services</h2>
      <p className='text-neutral text-lg accent-font'>A full stack web application for a San Francisco based company that routes drivers to restaurants in need of grease removal services. I am currently building the dashboard for this application and show have a demo ready by the in end of the month!</p>
      <a href="#"  className="btn btn-secondary w-1/3">Coming Soon</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={BARSS} alt='Bay Area Restaurant Services'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | MongoDB | Node | Express</h3>
      <h2 className='text-4xl heading-font uppercase'>Nature Photo Generator</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app that makes an API call to a server built with Express. The server can be logged into by an adminsitrator to upload new photos to be used by the react app. Others can make calls to the API as well with details listed on the About page of the site.</p>
      <a href="https://nature-photo-generator.netlify.app/" rel="noopener noreferrer" target="_blank" className="btn btn-secondary w-1/3">Visit</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={NPGSS} alt='Nature Photograph Generator Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Webflow | HTML | CSS</h3>
      <h2 className='text-4xl heading-font uppercase'>Akantro</h2>
      <p className='text-neutral text-lg accent-font'>A one page landing site for my contract role with Akantro. Currently working on an update for the site that should be coming soon!</p>
      <a href="https://akantro.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Visit</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={ADSS} alt='S&M Salon Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | CSS | Netlify</h3>
      <h2 className='text-4xl heading-font uppercase'>Thelma Thorpe Photography</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app built as a photographers portfolio/shop. App has a cart built with local storage that calculates totals and displays items.</p>
      <a href="https://thelmathorpe-photography.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={TTPSS} alt='Thelma Thorpe Photography Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | CSS | Netlify | Tailwind</h3>
      <h2 className='text-4xl heading-font uppercase'>Personal Portfolio Site</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app built built as my personal portfolio sire but could act as a template for other portfolio type sites. I intially drafted the design in figma before translating it into the site you are currently viewing. Figma file is linked for viewing below.</p>
      <a href="https://www.figma.com/file/ye4aVBQmvG9YbFG5AhPjZK/Portfolio-Site-Design-Docs?type=design&node-id=0%3A1&mode=design&t=4rK1whFeMBmQxTa4-1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Figma</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={SMSS} alt='S&M Salon Website Preview'></img>
    </div>

  <div className="collapse ">
  <input type="checkbox" onClick={() => setShow(!show)}/> 
  <div className='collapse-title text-lg xl:text-2xl p-0 w-1/2 m-auto'>
   {!show ?  <p className="w-full text-center btn-primary p-3 rounded-xl" >SHOW ALL</p> : <p className="w-full text-center btn-primary p-3 rounded-xl">HIDE</p>}
  </div>
  <div className="collapse-content p-0 m-0"> 
  


    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Shopify | Liquid | CSS | HTML</h3>
      <h2 className='text-4xl heading-font uppercase'>Daydaykay Designs</h2>
      <p className='text-neutral text-lg accent-font' >A shopify eccommerce site for humorous greeting cards for a variety of holidays.</p>
      <a href="https://daydaykaydesigns.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Visit</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={DDKSS} alt='Daydaykay Designs Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">EJS | Node | Express | Tailwind CSS</h3>
      <h2 className='text-4xl heading-font uppercase'>Dad Joke Central</h2>
      <p className='text-neutral text-lg accent-font'>A full stack application using EJS, Express, Node.js, Tailwind CSS, and DaisyUI. Built with a team of engineers while working at 100devs. This application allows a user to create an account, post their dad jokes, and like their favorites.</p>
      <a href="https://glamorous-cyan-parrot.cyclic.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={DJCSS} alt='Dad Joke Central Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Wordpress | CSS | HTML</h3>
      <h2 className='text-4xl heading-font uppercase'>Avanti Physical Therapy</h2>
      <p className='text-neutral text-lg accent-font'>A pelvic and orthopedic physical therapy website built with wordpress for a client.</p>
      <a href="https://avantiphysicaltherapy.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Visit</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={APTSS} alt='Avanti Physical Therapy Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex md:rounded-xl lg:rounded-xl xl:rounded-xl px-8 py-8 md:m-4 lg:m-4 xl:m-4 m-0 my-6'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | CSS | Netlify</h3>
      <h2 className='text-4xl heading-font uppercase'>S&M Salon</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app built to be a salon website for a potential local business.</p>
      <a href="https://s-m-salon.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0 self-center' src={SMSSS} alt='S&M Salon Website Preview'></img>
    </div>



  </div>
</div>
    
   
    </section>


</>
  )
}

export default Project