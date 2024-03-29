import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/img/j.png";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  // CommonJS
const Swal = require('sweetalert2')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c0l0kvy",
        "template_q9b0j7h",
        form.current,
        "NRLSLkx2tvgeG0rVL"
      )
      .then(
        (result) => {
            Swal.fire(
                'Sent!',
                'Your Email is Sent!',
                'success'
              )
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="sm:flex sm:flex-col-reverse lg:flex-row justify-between items-center w-[90vw] mx-auto px-8 rounded">
      <div data-aos="fade-right"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000" className="mx-auto mt-4 md:w-[60vw] lg:w-[50vw] ">
        <img  src={contactImg}  />
      </div>
      <div data-aos="fade-left"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000"
        id="contact"
        className="text-center md:w-[70vw] lg:w-[50vw] p-6 bg-lightSlate mx-auto mt-24 rounded-lg mb-16 text-black"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6  ">
            <div>
              <input
              required={true}
                className="  mb-6  bg-white shadow-inner shadow-green-300 rounded-2xl p-3"
                placeholder="Your Name"
                type="text"
                name="user_name"
              />{" "}
              <br />
            </div>
            <div>
              <input
               required={true}
                className=" mb-6 bg-white shadow-inner shadow-green-300  rounded-2xl p-3"
                type="email"
                placeholder="Your Email"
                name="user_email"
              />{" "}
              <br />
            </div>
          </div>
        <div  className=" mb-2 bg-white  mx-auto  shadow-inner shadow-green-300  rounded-2xl p-2">
        <textarea
           required={true}
            name="message"
            placeholder="Write Your message Here"
           className="w-full"
          />{" "}
        </div>
          <br />
          <button className="mb-4 bg-green-600 border border-x-white rounded px-6 py-2"
            type="submit">Send</button>
            
            
        
        </form>
        {error && (
          <p className="text-red-600 text-xl">Message Not Sent</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
