import Navber from './Components/Navber/Navber'
import Hero from './Components/pages/Hero/Hero'
import { Spotlight } from './Components/ui/SpotlightNew'
import Projects from './Components/pages/Projects/Projects'
import Contact from './Components/pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/pages/About/About'

const App = () => {
  return (
    <>
      < div className='overflow-hidden absolute inset-0' >
        <Spotlight />
      </div >
      <main className='max-w-[85rem] mx-auto p-4 relative overflow-hidden'>
        <Navber />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    
    </>
  )
}

export default App


  