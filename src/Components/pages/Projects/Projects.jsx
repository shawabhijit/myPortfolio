import { myProjects } from "../../../Constants"
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../Loader/CanvasLoader";
import DemoComputer from "../../DemoComputer/DemoComputer";
import {animate, motion } from "framer-motion";
import { X } from "lucide-react";

const projectCount = myProjects.length;

const Projects = () => {

    const [seletedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[seletedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex -1;
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
            x:100,
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
        <section className="c-space my-20" id="work">
            <p className="head-text">My Work</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initialX"
                    whileInView={"animateX"}
                    viewport={{ once: true, amount: 0.2 }}
                    custom={1}
                className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rouded-lg"
                        style={currentProject.logoStyle}
                    >
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm object-cover" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {
                                currentProject.tags.map((tag,index) => (
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
                        <a href={currentProject.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer text-white-600">
                            <p>Check Live site.</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
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
                className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group 
                                    scale={0.66}
                                    position={[0,0,0]}
                                    rotation={[0.3, 0, 0]}
                                >
                                    <DemoComputer seletedProjectIndex={seletedProjectIndex} />
                                </group>
                            </Suspense>
                            {/* <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} /> */}
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        </Center>
                    </Canvas>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects