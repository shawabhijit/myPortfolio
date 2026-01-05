import {motion} from 'framer-motion';

const contacts = [
    {
        name: 'Linkedin',
        image: '/assets/LinkedIn.png',
        link: 'https://www.linkedin.com/in/abhijit-sahoo-354b03253/',
    },
    {
        name: 'Github',
        image: '/assets/github.svg',
        link: 'https://github.com/shawabhijit',
    },
    {
        name: 'Instagram',
        image: '/assets/instagram.svg',
        link: 'https://www.instagram.com/abhijit_sahoo_7/',
    },
    {
        name: 'X',
        image: '/assets/twitter.png',
        link: 'https://x.com/abhijitDotTech',
    },
]

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-gray-500 text-sm flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                {
                    contacts.map((contact, index) => (
                        <motion.div 
                            className="social-icon" 
                            key={index}
                            
                        >
                            <a href={contact.link} className='flex items-center justify-center w-full h-full p-0' target="_blank" rel="noreferrer">
                                <img src={contact.image} alt={contact.name} className={`${contact.name === "X" ? "w-12 h-12" : "w-12 h-12" }`} />
                            </a>
                        </motion.div>
                    ))
                }
            </div>
            <p className='text-white-500'>© 2025 Abhijit. All rights reserved.</p>
        </section>
    )
}

export default Footer

    