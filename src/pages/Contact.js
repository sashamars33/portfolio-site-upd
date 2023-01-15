import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div id='connect' className="lg:w-3/4 lg:text-center lg:m-auto xl:w-3/4 xl:text-center xl:m-auto">
      <h1 className='text-5xl py-4'>Connect with Me!</h1>
      <p className='text-2xl py-4 font-normal pb-8' >Interested in starting a new project or want to connect? Fill out the form below and get in touch!</p>
      <ContactForm/>
      <p className='text-xl py-12 text-center' >You can also get in touch with by connecting with me on my socials. Links in the footer below!</p>
    </div>
  )
}

export default Contact