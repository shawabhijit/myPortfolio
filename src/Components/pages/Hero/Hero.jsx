import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import HackerRoom from '../../HackerRoom/HackerRoom'
import CanvasLoader from '../../Loader/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../../../Constants'
//import Target from '../../Target/Target'
//import ReactLogo from '../../ReactLogo/ReactLogo'
//import Cube from '../../Cube/Cube'
//import Rings from '../../Ring/Rings'
import HeroCamera from '../../HeroCamera'
import {InteractiveHoverButton} from '../../Button'

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 769 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative overflow-hidden ' id='home'>
            {/* <Spotlight /> */}
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-4xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi , I am Abhijit Sahoo <span className='waving-hand'>👋🏻</span>
                </p>
                <p className='hero_tag text-gray_gradient '>
                    Building Modern Web Applications
                </p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                //scale={0.08} 
                                //position={[0,0,0]} 
                                //rotation={[0, 280 , 0]} 
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            {/* <Target position={sizes.targetPosition} />  */}
                            {/* <ReactLogo position={sizes.reactLogoPosition} /> */}
                            {/* <Cube position={sizes.cubePosition} /> */}
                            {/* <Rings position={sizes.ringPosition} /> */}
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute left-0 right-0 bottom-12 w-full items-center justify-between flex z-10'>
                <div>
                    <InteractiveHoverButton className='sm:w-fit w-[150px] sm:min-w-60 text-gray-200  border border-gray-700'>
                        Download Resume
                    </InteractiveHoverButton>
                </div>
                <a href="#about" className='w-fit'>
                    <InteractiveHoverButton className="sm:w-fit w-[150px] sm:min-w-60 text-gray-200 border border-gray-700">
                        Let's Work together
                    </InteractiveHoverButton>
                </a>
                <div>
                    <InteractiveHoverButton className='sm:w-fit w-[150px] sm:min-w-60 text-gray-200 border border-gray-700'>
                        <a href="#contact">Contact Me</a>
                    </InteractiveHoverButton>
                </div>
            </div>
        </section>
    )
}

export default Hero