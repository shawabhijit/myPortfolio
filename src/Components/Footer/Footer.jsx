import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-gray-500 text-sm flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href="https://github.com/shawabhijit" className='flex items-center justify-center w-full h-full' target="_blank" rel="noreferrer">
                        <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/abhijit-sahoo-354b03253/" className='flex items-center justify-center w-full h-full' target="_blank" rel="noreferrer">
                        <img src="/assets/LinkedIn.png" alt="linkedin" className='w-1/2 h-1/2' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href="https://www.instagram.com/abhijit_sahoo_7/" className='flex items-center justify-center w-full h-full' target="_blank" rel="noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
                    </a>
                </div>
            </div>
            <p className='text-white-500'>© 2025 Abhijit. All rights reserved.</p>
        </section>
    )
}

export default Footer