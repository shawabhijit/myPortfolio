// import { useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
// import { calculateSizes } from '../../../Constants'
import {motion} from 'framer-motion'
import { Snippet } from '@heroui/snippet'

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
        <section className='min-h-screen w-full flex flex-col justify-center mt-[-80px] relative overflow-hidden' id='home'>
            {/* <Spotlight /> */}
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 '>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                    className='sm:text-5xl text-2xl font-medium text-white text-center font-generalsans'
                >
                    Hi , I am <span className='text-gray_gradient'>Abhijit Sahoo</span> <span className='waving-hand'>👋🏻</span>
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    className='hero_tag text-gray_gradient w-full'
                >
                    Building Modern Web Applications
                </motion.p>
                <motion.p className='text-gray-400 text-center sm:text-lg text-sm font-medium max-w-3xl mx-auto mt-2'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                >
                    I'm a dedicated full stack developer with strong expertise in Java, Spring Boot, and modern frontend technologies like React and Redux , Tailwind css. I enjoy building scalable web applications with clean architecture and seamless user experiences.
                </motion.p>
            </div>
            
            <motion.div className='relative mt-10 w-[95%] items-center justify-center flex z-10'
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

    // < div className = 'copy-container border border-gray-700 py-2 px-4 rounded-xl' onClick = { handleCopy } >
    //                 <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" className='w-4 h-4 mt-2' />
    //                 <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>
    //                     npx abhijit-sahoo
    //                 </p>
    //             </div >


    // < div className = 'w-full h-full absolute inset-0' >
    //     {/* <Leva /> */ }
    //     < Canvas className = 'w-full h-full' >
    //         <Suspense fallback={<CanvasLoader />}>
    //             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
    //             <HeroCamera isMobile={isMobile}>
    //                 <HackerRoom
    //                     //scale={0.08} 
    //                     //position={[0,0,0]} 
    //                     //rotation={[0, 280 , 0]} 
    //                     position={sizes.deskPosition}
    //                     rotation={[0, -Math.PI, 0]}
    //                     scale={sizes.deskScale}
    //                 />
    //             </HeroCamera>

    //             <group>
    //                 {/* <Target position={sizes.targetPosition} />  */}
    //                 {/* <ReactLogo position={sizes.reactLogoPosition} /> */}
    //                 {/* <Cube position={sizes.cubePosition} /> */}
    //                 {/* <Rings position={sizes.ringPosition} /> */}
    //             </group>
    //             <ambientLight intensity={1} />
    //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
    //         </Suspense>
    //             </Canvas >
    //         </div >


//     < motion.div
// initial = {{ opacity: 0, y: 100 }}
// animate = {{ opacity: 1, y: 0 }}
// transition = {{ duration: 1, ease: "easeInOut", delay: 0.2 }}
//                 >
//     <InteractiveHoverButton className="sm:w-fit w-[150px] sm:min-w-60 text-gray-200 border border-gray-700">
//         <div className='flex items-center justify-center gap-2' onClick={handleCopy}>
//             <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" className='w-4 h-4 mt-2' />
//             npx abhijit_sahoo07
//         </div>
//     </InteractiveHoverButton>
//                 </motion.div >
//                 <motion.a href="#about" className='w-fit'
//                     initial={{ opacity: 0, y: 100 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
//                 >
//                     <InteractiveHoverButton className="sm:w-fit w-[150px] sm:min-w-60 text-gray-200 border border-gray-700">
//                         Let's Work together
//                     </InteractiveHoverButton>
//                 </motion.a>
//                 <motion.a href='https://drive.google.com/file/d/1KpWkcpusx-GKDHgzvl9kUAoGxqxjnWRo/view?usp=drive_link' target='blank' download={"myResume.pdf"}
//                     initial={{ opacity: 0, y: 100 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
//                 >
//                     <InteractiveHoverButton className='sm:w-fit w-[150px] sm:min-w-60 text-gray-200  border border-gray-700'>
//                         View My Resume
//                     </InteractiveHoverButton>
//                 </motion.a>