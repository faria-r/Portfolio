import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { id, image, name, about } = project;
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000"
      className="relative mt-32 overflow-hidden"
    >
      <div className="card bg-Darknavy shadow shadow-green-400 sm:w-[70vw] lg:w-[55vw] mx-auto  my-16">
        <figure className="h-96">
          <img src={image} className='sm:w-auto lg:w-[50vw]  border-white border-2 rounded' alt="project!" />
        </figure>
      </div>
      <div data-aos="fade-right"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000" className="lg:absolute lg:top-20 lg:left-[55%] lg:right-16 card lg:w-[40vw] lg:my-12 ">
        <div className="card-body text-Slate">
          <p className="text-2xl text-green-600 text-end font-mono font-bold">{name}</p>
          <p className="bg-Darknavy  px-4 py-6 rounded">{about}</p>
          <div className="text-end">
          <Link to={`/details/${id}`}>
            <button className="rounded-lg btn border bg-navy text-green-600 border-green-600">Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
