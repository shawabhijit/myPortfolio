import React from 'react'

const About = () => {
    return (
        <section className='c-space my-20 z-10 mx-w-7xl mx-auto'>
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
                        <img src="/assets/grid2.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About