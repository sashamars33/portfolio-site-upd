import {Link, animateScroll as scroll} from 'react-scroll'

const Nav = () => {
  return (
    <nav className='navbar mb-12 shadow-lg text-neutral xl:text-2xl lg:text-xl md:text-lg text-sm uppercase'>
        <div className='flex my-6 mx-8 md:mx-32 lg:mx-48 xl:mx-48 justify-between w-full'>
            <Link to='home' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='text-secondary'>Sasha Marshall</Link>
            <div className='flex justify-between w-1/2'>
              <Link to='projects' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='text-primary'>Projects</Link>
              <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='text-primary'>About</Link>
              <Link to='connect' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='text-accent'>Connect</Link>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav