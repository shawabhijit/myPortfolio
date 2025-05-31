import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

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

    return (
        <section className='c-space my-20 mt-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal-background" 
                    className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
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
                        <label className='space-y-3'>
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
                        </label>
                        <label className='space-y-3'>
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
                        </label>
                        <label className='space-y-3'>
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
                        </label>
                        <button className='field-btn' type='submit'>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
                
        </section>
    )
}

export default Contact