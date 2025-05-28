import React, { useState } from 'react'
import { navLinks } from '../../Constants'

const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {
        navLinks.map((item) => (
          <li key={item.id} className='nav-li'>
            <a href={item.href} className='nav-li_a'>{item.name}</a>
          </li>
        )
      )}
    </ul>

  )
}

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div className='text-white fixed top-0 right-0 left-0 bg-black/90 z-10'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                  ABHIJIT
                </a>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden block text-neutral-400 hover:text-white transition-colors' aria-label='Toggle Menu'>
                  <img src={isOpen ?  "assets/close.svg":"assets/menu.svg"} alt="toogle" className='w-6 h-6' />
                </button>

                <nav className='sm:flex hidden'>
                    <NavItems />
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}` }>
          <nav className='p-5'>
            <NavItems />
          </nav>
        </div>
    </div>
  )
}

export default Navber