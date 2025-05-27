import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../HackerRoom/HackerRoom'
import CanvasLoader from '../Loader/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../../Constants'
import Target from '../Target/Target'

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({maxWidth: 1024 , minWidth: 769})

    const sizes = calculateSizes(isSmall , isMobile , isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
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
                        <HackerRoom 
                            //scale={0.08} 
                            //position={[0,0,0]} 
                            //rotation={[0, 280 , 0]} 
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI , 0]}
                            scale={sizes.deskScale}
                        />
                        <group>
                            <Target position={sizes.targetPosition} />
                        </group>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero