import {Link, animateScroll as scroll} from 'react-scroll'

const Nav = () => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='flex px-2 mx-2 w-full justify-between'>
            <Link to='home' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
            <div className='flex justify-end'>
              <Link to='projects' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>Projects</Link>
              <Link to='about' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>About</Link>
              <Link to='connect' activeClass='active' spy={true} smooth={true} offset={-50} duration={500} className='btn btn-ghost btn-sm rounded-btn'>Connect</Link>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav