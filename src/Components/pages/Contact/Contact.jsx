import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'


const Contact = () => {
    const formRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const [loading, setLoading] = useState(false);
    const [form , setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: {name , value}}) => {
        setForm({
            ...form,
            [name]: value
        })
    }


    //service_4zkcmip
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);

        try {
            await emailjs.send('service_5wantdv', 'template_i4uqhsi', {
                from_name: formData.get('name'),
                to_name: 'Abhijit',
                from_email: formData.get('email'),
                to_email: 'shawabhijit370@gmail.com',
                message: formData.get('message'),
            }, '0FfSQ2XndhZALoqNV');
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }
        catch (error) {
            setLoading(false);
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
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
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
        className='c-space my-20 mt-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                {
                    !isMobile && <img src="/assets/terminal.png" alt="terminal-background"
                        className='absolute inset-0 min-h-screen' />
                }
                <div className={`contact-container ${isMobile ? 'border border-dashed border-gray-700 p-3' : ''}`}>
                    <h3 className='head-text'>Contact Me</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                        Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
                    </p>

                    <form 
                        ref={formRef} 
                        onSubmit={handleSubmit}
                        className='mt-12 flex flex-col space-y-7'
                    >
                        <motion.label className='space-y-3'
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                        >
                            <span className='field-label'>Full Name</span>
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Enter your full name'
                            />
                        </motion.label>
                        <motion.label className='space-y-3'
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                        >
                            <span className='field-label'>Email</span>
                            <input
                                type="email"
                                name='email'
                                required
                                value={form.email}
                                onChange={handleChange}
                                className='field-input'
                                placeholder='Enter your email'
                            />
                        </motion.label>
                        <motion.label className='space-y-3'
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                        >
                            <span className='field-label'>Your message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Fell free to drop me a message'
                            />
                        </motion.label>
                        <motion.button
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={1}
                        className='field-btn cursor-pointer' type='submit'>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </motion.button>
                    </form>
                </div>
            </div>
                
        </motion.section>
    )
}

export default Contact