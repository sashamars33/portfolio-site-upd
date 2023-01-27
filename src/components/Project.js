// import SNSS from '../assets/images/sticky-notes-ss.png'
import NPGSS from '../assets/images/nature-photo-ss.png'
import TTPSS from '../assets/images/thelma-ss.png'
import SMSSS from '../assets/images/sm-ss.png'
import APTSS from '../assets/images/avanti-ss.png'
import DDKSS from '../assets/images/daydaykay-ss.png'
import DJCSS from '../assets/images/DJCSS.png'
// import { Link } from 'react-router-dom'


const Project = () => {
  return (
    <section className='card bg-neutral grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center'>
    {/* <a href='#'>
    <div className='card bg-info text-neutral flex flex-col justify-between p-4 m-4'>
      <h2 className='text-3xl'>Sticky Notes</h2>
      <p className='text-base-100 font-normal '>A MERN stack app that allows a user to make an account with the site.With that account thay can create pages of sticky notes that are ranked from most important to least important. A user can also keep track of which tasks they've completed.</p>
      <p className="">Techologies: React | MongoDB | Node | Express</p>
      <img className='w-full my-4 rounded-2xl' src={SNSS} alt='Sticky Notes Website Preview'></img>
    </div>
    </a> */}
    <a href='https://nature-photo-generator.netlify.app/'>
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>Nature Photo Generator</h2>
      <p className='text-base-100 font-normal '>A React frontend app that makes an API call to a server built with Express. The server can be logged into by an adminsitrator to upload new photos to be used by the react app. Others can make calls to the API as well with details listed on the About page of the site.</p>
      <p className="">Techologies: React | MongoDB | Node | Express</p>
      <img className='w-full my-4 rounded-2xl' src={NPGSS} alt='Nature Photograph Generator Website Preview'></img>
    </div>
    </a>
    <a href='https://avantiphysicaltherapy.com/'>
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>Avanti Physical Therapy</h2>
      <p className='text-base-100 font-normal '>A pelvic and orthopedic physical therapy website built with wordpress for a client.<br></br>
      "She listened to my ideas and was able to incorporate them into her decisions for design and style which resulted in a website that was exactly what I was asking for." - Giusi</p>
      <p className="">Techologies: Wordpress | CSS | HTML</p>
      <img className='w-full my-4 rounded-2xl' src={APTSS} alt='Avanti Physical Therapy Website Preview'></img>
    </div>
    </a>
    <a href='https://thelmathorpe-photography.netlify.app/'>
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>Thelma Thorpe Photography</h2>
      <p className='text-base-100 font-normal '>A React frontend app built as a photographers portfolio/shop. App has a cart built with local storage that calculates totals and displays items.</p>
      <p className="">Techologies: React | CSS</p>
      <img className='w-full my-4 rounded-2xl' src={TTPSS} alt='Thelma Thorpe Photography Website Preview'></img>
    </div>
    </a>
    <a href='https://s-m-salon.netlify.app/' className="">
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>S&M Salon</h2>
      <p className='text-base-100 font-normal'>A React frontend app built to be a salon website for a potential local business. </p>
      <p className="">Techologies: React | CSS</p>
      <img className='w-full my-4 rounded-2xl' src={SMSSS} alt='S&M Salon Website Preview'></img>
    </div>
    </a>
    <a href='https://daydaykaydesigns.com/' className="">
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>Daydaykay Designs</h2>
      <p className='text-base-100 font-normal'>A shopify eccommerce site for humorous greeting cards for a variety of holidays.<br></br>
      "She was patient, thoughtful and insightful. And in the end, I not only got a beautiful website,
but she texted me a simple explanation on how to proceed in maintaining the website in the
future." - David</p>
      <p className="">Techologies: Shopify | CSS</p>
      <img className='w-full my-4 rounded-2xl' src={DDKSS} alt='Daydaykay Designs Website Preview'></img>
    </div>
    </a>
    <a href='https://glamorous-cyan-parrot.cyclic.app/'>
    <div className='card bg-info text-neutral flex flex-col justify-between flex  p-4 m-4'>
      <h2 className='text-3xl'>Dad Joke Central</h2>
      <p className='text-base-100 font-normal '>A full stack application using EJS, Express, Node.js, Tailwind CSS, and DaisyUI. Built with a team of engineers while working at 100devs. This application allows a user to create an account, post their dad jokes, and like their favorites.</p>
      <p className="">Techologies: EJS | Node | Express | Tailwind CSS</p>
      <img className='w-full my-4 rounded-2xl' src={DJCSS} alt='Dad Joke Central Website Preview'></img>
    </div>
    </a>
    </section>
  )
}

export default Project