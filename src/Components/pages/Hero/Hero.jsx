// import { useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
// import { calculateSizes } from '../../../Constants'
import {motion} from 'framer-motion'
import { Snippet } from '@heroui/snippet'
import ScrollSection from '../../ScrollToNext'

const Hero = () => {
    // const isSmall = useMediaQuery({ maxWidth: 440 })
    // const isMobile = useMediaQuery({ maxWidth: 768 })
    // const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 769 })

    // const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // const [hasCopied, setHasCopied] = useState(false);

    // const handleCopy = () => {
    //     navigator.clipboard.writeText("npx abhijit_sahoo07");

    //     setHasCopied(true);

    //     setTimeout(() => {
    //         setHasCopied(false);
    //     }, 2000);
    // }

    return (
        <section className='min-h-screen w-full flex flex-col justify-center relative overflow-hidden' id='home'>
            {/* <Spotlight /> */}
            <div className='w-full md:mx-auto flex flex-col sm:mt-26 mt-0 c-space gap-3'>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    className='sm:text-5xl text-2xl font-medium text-white text-center font-generalsans'
                >
                    Hi , I am <span className='text-orange-500'>Abhijit Sahoo</span> <span className='waving-hand'>👋🏻</span>
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    className='hero_tag text-gray_gradient w-full leading-tight'
                >
                    Building Modern Web <span className='text-orange-500'>Applications</span>
                </motion.p>
                <motion.p className='text-gray-500 text-center sm:text-lg text-sm font-medium max-w-3xl mx-auto mt-5'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                >
                    I'm a dedicated full stack developer with strong expertise in Java, Spring Boot, and modern frontend technologies like React and Redux , Tailwind css. I enjoy building scalable web applications with clean architecture and seamless user experiences.
                </motion.p>
            </div>
            
            <motion.div className='relative mt-5 w-[95%] items-center justify-center flex z-10'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
            >
                <Snippet color='success' >
                    npx abhijit_sahoo07
                </Snippet>
            </motion.div>
        </section>
    )
}

export default Hero