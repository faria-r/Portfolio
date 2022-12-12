import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const[success,setSuccess] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_c0l0kvy', 'template_q9b0j7h', form.current, 'f7DbGE6cypVK4qFTX')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contact' className='text-center  p-6 bg-slate-400 w-96 mx-auto rounded-lg mb-16 text-black'>
           <form  ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='ml-12 mb-6 bg-slate-100 rounded p-3' type="text" name="user_name" /> <br />
      <label>Email</label>
      <input className='ml-12 mb-6 bg-slate-100 rounded p-3' type="email" name="user_email" /> <br />

      <textarea name="message" placeholder='write Your message Here' className=' ml-24 mb-6 w-48 mx-auto bg-slate-100 rounded p-3 text-black'/> <br />
      <input className='ml-12 mb-6 bg-green-600 rounded px-6 py-2' type="submit" value="Send" />
    </form>
    {
        success && <p className='text-green-600 text-xl'>Email Sent SuccessFully!</p>
    }
        </div>
    );
};

export default Contact;