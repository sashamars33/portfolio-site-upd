import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Testimonials from './pages/Testimonials'


function App() {
  return (
    <Router>
      <section className="flex flex-col justify-between h-screen">
        <main className='contianer lg:flex lg:flex-wrap xl:flex xl:flex-wrap'>
          <Home />
          <Projects />
          <About />
          <Contact />
          <Testimonials />
        </main>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
