import { myProjects } from "../../../Constants"
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../Loader/CanvasLoader";
import DemoComputer from "../../DemoComputer/DemoComputer";
import { motion } from "framer-motion";

const projectCount = myProjects.length;

const Projects = () => {

    const [seletedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[seletedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            }
            else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        initialX: {
            opacity: 0,
            x: -100,
        },
        initialRightX: {
            opacity: 0,
            x: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.07 * index,
                duration: 1,
                ease: "easeInOut",
            }
        }),
        animateX: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 * index,
                duration: 1,
                ease: "easeInOut",
            }
        }),
        animateRightX: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 * index,
                duration: 1,
                ease: "easeInOut",
            }
        })
    }

    return (
        <section className="c-space my-10 sm:my-16 md:my-20" id="work">
            <div className="text-center mt-8 mb-12 sm:mt-12 sm:mb-16 md:mt-20 md:mb-24 lg:mt-32 lg:mb-32 px-4">
                <motion.h2
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: true, amount: 0.2 }}
                    custom={0}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white"
                >
                    Featured <span className="text-orange-500">Projects</span>
                </motion.h2>
                <motion.p
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                    className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-2"
                >
                    Explore my portfolio of full-stack applications, where innovative design meets powerful technology.
                    Each project showcases my expertise in building scalable, user-centric solutions.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-8 sm:mt-10 md:mt-12 gap-4 sm:gap-5 w-full">
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initialX"
                    whileInView={"animateX"}
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                    className="flex flex-col gap-4 sm:gap-5 relative p-5 sm:p-8 md:p-10 shadow-2xl shadow-black-200 rounded-lg">
                    <div className="absolute top-0 right-0 overflow-hidden rounded-xl max-w-full">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-2 sm:p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                        style={currentProject.logoStyle}
                    >
                        <img src={currentProject.logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 shadow-sm object-cover" />
                    </div>
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-white-600">
                        <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{currentProject.title}</p>
                        <p className="text-gray-400 text-xs sm:text-sm font-semibold leading-relaxed">{currentProject.desc}</p>
                        <p className="text-gray-400 text-xs sm:text-sm font-semibold leading-relaxed">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 md:gap-5">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            {
                                currentProject.tags.map((tag, index) => (
                                    <motion.div key={index}
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView={"animate"}
                                        viewport={{ once: true, amount: 0.2 }}
                                        custom={index}
                                        className="tech-logo">
                                        <img src={tag.path} alt={tag.name} />
                                    </motion.div>
                                ))
                            }
                        </div>
                        <a href={currentProject.href == '' ? currentProject.git : currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-1 sm:gap-2 cursor-pointer text-white-600 text-xs sm:text-sm">
                            {
                                currentProject.href == '' ? 'View GitHub' : 'Visit Website'
                            }
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-5 sm:mt-6 md:mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initialRightX"
                    whileInView={"animateRightX"}
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                    className="border border-black-300 bg-black-200 rounded-lg h-[300px] sm:h-[400px] md:h-[500px] lg:h-full overflow-hidden">
                    <Canvas className="w-full h-full">
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group
                                    scale={window.innerWidth < 640 ? 0.5 : window.innerWidth < 768 ? 0.58 : 0.66}
                                    position={[0, 0, 0]}
                                    rotation={[0.3, 0, 0]}
                                >
                                    <DemoComputer seletedProjectIndex={seletedProjectIndex} />
                                </group>
                            </Suspense>
                            {/* <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} /> */}
                            {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} /> */}
                        </Center>
                    </Canvas>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects