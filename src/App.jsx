import React from 'react'
import Navber from './Components/Navber/Navber'
import Hero from './Components/pages/Hero/Hero'
import About from './Components/pages/About/About'
import { Spotlight } from './Components/ui/SpotlightNew'

const App = () => {
  return (
    <>
      < div className='overflow-hidden absolute inset-0' >
        <Spotlight />
      </div >
      <main className='max-w-7xl mx-auto p-4 relative'>
        <Navber />
        <Hero />
        <About />
      </main>
    
    </>
  )
}

export default App


  