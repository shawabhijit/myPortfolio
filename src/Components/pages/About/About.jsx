import { useState } from 'react'
import Globe from 'react-globe.gl'
import { InteractiveHoverButton } from '../../Button'
import { motion } from 'framer-motion'

const techStack = [
    {
        name: "javaScript",
        image: "/assets/JavaScript.png",
    },
    {
        name: "TypeScript",
        image: "/assets/typescript.png",
    },
    {
        name: "Java",
        image: "/assets/Java.png",
    },
    {
        name: "React",
        image: "/assets/react.svg",
    },
    {
        name: "Redux",
        image: "/assets/Redux.png",
    },
    {
        name: "Node.js",
        image: "/assets/Node.js.png",
    },
    {
        name: "Spring Boot",
        image: "/assets/spring-boot.png",
    },
    {
        name: "Hibernate",
        image: "assets/Hibernate.png",
    },
    {
        name: "PostgreSQL",
        image: "/assets/postgresql-48.png",
    },
    {
        name: "Tailwind CSS",
        image: "/assets/tailwindcss.png",
    },
    {
        name: "Framer Motion",
        image: "/assets/framer.svg",
    },
    {
        name: "Maven",
        image: "/assets/Apache Maven.png",
    },
    {
        name: "Docker",
        image: "/assets/docker.png",
    },

    {
        name: "Notion",
        image: "/assets/notion.svg",
    },
    {
        name: "Three.js",
        image: "/assets/Three.js.png",
    },
    {
        name: "Git",
        image: "assets/Git.png"
    },
    {
        name: "GitHub",
        image: "/assets/github.svg",
    },
]

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("shawabhijit370@gmail.com")

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
                duration: 1,
                ease: "easeInOut",
            }
        }),
    }

    return (
        <motion.section
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 0.2 }}

            className='c-space my-20 z-10 mx-w-7xl mx-auto' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit' />
                        <div>
                            <p className='grid-headtext'>Hi , I'm Abhijit Sahoo</p>
                            <p className='grid-subtext'>With a keen knowledge of Spring Boot in the backend and React.js for the frontend, I can create full-stack applications with stunning design and scalability.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <div className="relative flex h-[280px] w-full flex-wrap items-center justify-center overflow-hidden">
                            {
                                techStack.map((tech, index) => (
                                    <motion.div key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView={"animate"}
                                        viewport={{ once: true }}
                                        custom={index}
                                        className="flex items-center justify-center m-1 p-2 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                                        <img src={tech.image} alt={tech.name} className="h-8 w-8 rounded-full" />
                                    </motion.div>
                                ))
                            }
                        </div>
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I Specialize in JAVA with a focus on Spring Boot also have keen knowledge of JavaScript/TypeScript with a focus on React ecosystem. </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[336px] h-fit flex justify-center items-center'>
                            <Globe
                                height={336}
                                width={336}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I Work remotely across most timezones.</p>
                            <p className='grid-subtext mb-10'>I'm based in India , with remmot work available.</p>
                            {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
                            <a href="#about" className='w-fit'>
                                <InteractiveHoverButton className="sm:w-fit w-full sm:min-w-80 text-gray-200 border border-gray-700 bg-inherit">
                                    Contact Me
                                </InteractiveHoverButton>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Passion for Codding</p>
                            <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                        <div className='space-y-2 '>
                            <p className='grid-subtext text-center'>Contact me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                    shawabhijit370@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About