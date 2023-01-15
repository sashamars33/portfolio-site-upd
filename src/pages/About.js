// import profileImg from '../assets/images/sasha-img.jpeg'

const About = () => {
  return (
    <div id='about' className='my-8 card bg-neutral p-8 grid grid-cols-4 items-center content-center'>
      {/* <img src={profileImg} alt='Portrait of Sasha Marshall' className='w-3/4 justify-self-end rounded-full col-start-1 col-end-4 row-start-1 row-end-2 mb-8'></img> */}
      <h1 className='text-3xl col-start-1 col-end-5 text-center xl:text-5xl l:text-5xl'>About the Engineer</h1>
      <p className='py-4 col-start-1 col-end-5 font-normal text-l'>I began working as a software engineer in early 2022 after being introduced to a training agency known as 100 devs. While spending time there I built up my skills by building personal projects indivdually and on teams. I also contracted freelance work during this time building sites for small businesses.</p>
      <p className='col-start-1 col-end-5 font-normal'>I am currently open to positions as a full-stack, front-end, or back-end engineer. My main technologies are React, MongoDB, Express, Node, HTML/CSS, JavaScript, and TailwindCSS. I also have substaintial experience with design softwares such as Photoshop, Illustrator, Figma, and Procreate. Moving forward I am looking to expand my skills in a variety of areas to find my passion in tech.</p>
    </div>
  )
}

export default About