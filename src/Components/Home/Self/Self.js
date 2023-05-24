import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Self = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div  data-aos="fade-right" data-aos-duration="3000" className="">
      <div>
        <h1 className="text-green-600 text-2xl my-8">HI! This is </h1>
        <span className="text-lightSlate font-sans text-3xl font-semibold ">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "Faria Sultana",
              1000,
              "Faria Sultana ",
              1000,
              "Faria Sultana Bintha",
              1000,
              "Faria Sultana Bintha Rohman",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "2em" }}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </span>
        <h1 className="text-Slate text-5xl font-bold my-4">
          {" "}
          I Build Your Dream Website{" "}
        </h1>
      </div>
      <div>
        <p className="text-Slate">
          I'm a Passionate Web developer Specilaized in MERN. I'm interested in
          learning latest web technologies. Able to work well in teams as well
          as individually.Currently i am focused on building web app and full
          stack websites.
        </p>
      </div>

      <a href="#">
        <button className="mr-16 rounded-lg btn border bg-navy text-green-600 border-green-600 my-8">
          Hire Me
        </button>
      </a>
    </div>
  );
};

export default Self;
