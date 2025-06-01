import { useState } from 'react'
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
    <div className='text-white fixed top-0 right-0 left-0 bg-black/90 z-20 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            ABHIJIT
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden block text-neutral-400 hover:text-white transition-colors' aria-label='Toggle Menu'>
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toogle" className='w-6 h-6' />
          </button>

          <nav className='sm:flex hidden gap-4 justify-center items-center c-space'>
            
            <NavItems />
            <a href='https://drive.google.com/file/d/1KpWkcpusx-GKDHgzvl9kUAoGxqxjnWRo/view?usp=drive_link' target='blank' download={"myResume.pdf"}
              className='text-white-600 hover:text-white transition-colors text-sm font-medium bg-gray-800 px-4 py-2 rounded-lg shadow-lg shadow-black/20'
            >
              View My Resume
            </a>
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
          <div className='mt-5 ml-4'>
            <a href='https://drive.google.com/file/d/1KpWkcpusx-GKDHgzvl9kUAoGxqxjnWRo/view?usp=drive_link' target='blank' download={"myResume.pdf"}
              className='text-white-600 hover:text-white transition-colors text-sm font-medium bg-gray-800 px-4 py-2 rounded-lg shadow-lg shadow-black/20'
            >
              View My Resume
            </a>
          </div>
        </nav>
        
      </div>

    </div>
  )
}

export default Navber