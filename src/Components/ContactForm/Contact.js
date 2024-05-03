import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/img/j.png";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { FaRocket } from "react-icons/fa";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  // CommonJS
  const Swal = require("sweetalert2");

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
          Swal.fire("Sent!", "Your Email is Sent!", "success");
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" w-[90vw] mx-auto px-8 rounded">
  
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
        id="contact"
        className="text-center md:w-[70vw] lg:w-[45vw] py-8 px-6 bg-lightSlate mx-auto mt-24 rounded-lg mb-16 text-black"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div><h2 className="text-3xl  pb-6 flex text-center justify-center">Email Me <span className="ml-4 text-teal"><FaRocket /></span></h2></div>
          <div className="">
            <div>
              <input
                required={true}
                className=" w-full mb-6  bg-white  rounded-2xl p-3"
                placeholder="Your Name"
                type="text"
                name="user_name"
              />{" "}
              <br />
            </div>
            <div>
              <input
                required={true}
                className="w-full mb-6 bg-white rounded-2xl p-3"
                type="email"
                placeholder="Your Email"
                name="user_email"
              />{" "}
              <br />
            </div>
          </div>
          <div className=" mb-2 bg-white  mx-auto  py-6 rounded-2xl p-2">
            <textarea
              required={true}
              name="message"
              placeholder="Write Your message Here"
              className="w-full"
            />{" "}
          </div>
          <br />
          <button
            className="mb-4 w-1/2 text-xl bg-gradient-to-r from-lightSlate to-teal e rounded px-6 py-4"
            type="submit"
          >
            Send
          </button>
        </form>
        {error && <p className="text-red-600 text-xl">Message Not Sent</p>}
      </div>
    </div>
  );
};

export default Contact;
