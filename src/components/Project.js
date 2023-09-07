import {useState, useEffect} from 'react'
// import SNSS from '../assets/images/sticky-notes-ss.png'
import NPGSS from '../assets/images/nature-photo-ss.png'
import TTPSS from '../assets/images/thelma-ss.png'
import SMSSS from '../assets/images/sm-ss.png'
import APTSS from '../assets/images/avanti-ss.png'
import DDKSS from '../assets/images/daydaykay-ss.png'
import DJCSS from '../assets/images/DJCSS.png'
import ADSS from '../assets/images/ADSS.png'
import {BsArrowDown} from 'react-icons/bs'
import {BsArrowUp} from 'react-icons/bs'


// import { Link } from 'react-router-dom'


const Project = () => {

  const [show, setShow] = useState(false);

  return (
    <>
    <section className=' grid grid-cols-1 items-center mx-8 md:mx-32 lg:mx-48 xl:mx-48 pb-12'>
    {/* <a href='#'>
    <div className='card bg-info text-neutral flex flex-col justify-between p-4 m-4'>
      <h2 className='text-3xl'>Sticky Notes</h2>
      <p className='text-base-100 font-normal '>A MERN stack app that allows a user to make an account with the site.With that account thay can create pages of sticky notes that are ranked from most important to least important. A user can also keep track of which tasks they've completed.</p>
      <p className="">Techologies: React | MongoDB | Node | Express</p>
      <img className='w-full my-4 rounded-2xl' src={SNSS} alt='Sticky Notes Website Preview'></img>
    </div>
    </a> */}
    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | MongoDB | Node | Express</h3>
      <h2 className='text-4xl heading-font uppercase'>Nature Photo Generator</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app that makes an API call to a server built with Express. The server can be logged into by an adminsitrator to upload new photos to be used by the react app. Others can make calls to the API as well with details listed on the About page of the site.</p>
      <a href="https://nature-photo-generator.netlify.app/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={NPGSS} alt='Nature Photograph Generator Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Webflow | HTML | CSS</h3>
      <h2 className='text-4xl heading-font uppercase'>Akantro</h2>
      <p className='text-neutral text-lg accent-font'>A one page landing site for Akantro development group.</p>
      <a href="https://akantro.com/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={ADSS} alt='S&M Salon Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | CSS | Netlify</h3>
      <h2 className='text-4xl heading-font uppercase'>Thelma Thorpe Photography</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app built as a photographers portfolio/shop. App has a cart built with local storage that calculates totals and displays items.</p>
      <a href="https://thelmathorpe-photography.netlify.app/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={TTPSS} alt='Thelma Thorpe Photography Website Preview'></img>
    </div>

  <div className="collapse">
  <input type="checkbox" onClick={() => setShow(!show)} /> 
  <div className='collapse-title text-2xl w-2/12 m-auto'>
   {!show ?  <p className="flex items-center w-full justify-between m-auto" >SHOW ALL <BsArrowDown /></p> : <p className="flex items-center w-full justify-between m-auto">HIDE <BsArrowUp /> </p>}
  </div>
  <div className="collapse-content p-0 m-0"> 
  <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">React | CSS | Netlify</h3>
      <h2 className='text-4xl heading-font uppercase'>S&M Salon</h2>
      <p className='text-neutral text-lg accent-font'>A React frontend app built to be a salon website for a potential local business.</p>
      <a href="https://s-m-salon.netlify.app/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={SMSSS} alt='S&M Salon Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Shopify | Liquid | CSS | HTML</h3>
      <h2 className='text-4xl heading-font uppercase'>Daydaykay Designs</h2>
      <p className='text-neutral text-lg accent-font' >A shopify eccommerce site for humorous greeting cards for a variety of holidays.</p>
      <a href="https://daydaykaydesigns.com/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={DDKSS} alt='Daydaykay Designs Website Preview'></img>
    </div>


    <div className='gradient text-neutral flex flex-col xl:flex-row-reverse justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">EJS | Node | Express | Tailwind CSS</h3>
      <h2 className='text-4xl heading-font uppercase'>Dad Joke Central</h2>
      <p className='text-neutral text-lg accent-font'>A full stack application using EJS, Express, Node.js, Tailwind CSS, and DaisyUI. Built with a team of engineers while working at 100devs. This application allows a user to create an account, post their dad jokes, and like their favorites.</p>
      <a href="https://glamorous-cyan-parrot.cyclic.app/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={DJCSS} alt='Dad Joke Central Website Preview'></img>
    </div>

    <div className='gradient text-neutral flex flex-col xl:flex-row justify-between flex rounded-xl px-8 py-3 m-4'>
      <div className='flex flex-col justify-center w-full xl:w-2/4 text-left gap-4'>
      <h3 className="text-primary uppercase text-lg accent-font">Wordpress | CSS | HTML</h3>
      <h2 className='text-4xl heading-font uppercase'>Avanti Physical Therapy</h2>
      <p className='text-neutral text-lg accent-font'>A pelvic and orthopedic physical therapy website built with wordpress for a client.</p>
      <a href="https://avantiphysicaltherapy.com/" className="btn btn-secondary w-1/3">Demo</a>
      </div>
      <img className='w-full xl:w-1/3 my-4 rounded-2xl saturate-0' src={APTSS} alt='Avanti Physical Therapy Website Preview'></img>
    </div>

  </div>
</div>
    
   
    </section>


</>
  )
}

export default Project