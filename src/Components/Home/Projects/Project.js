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
      <div className="card bg-green-900 shadow shadow-green-400 lg:w-[650px] sm:mx-auto lg:mr-[450px] my-16">
        <figure className="h-96">
          <img src={image} className='' alt="project!" />
        </figure>
      </div>
      <div data-aos="fade-right"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000" className="lg:absolute lg:top-20 lg:left-[60%] card lg:w-[39%] sm:mx-auto lg:mr-[450px] my-12 ">
        <div className="card-body text-white">
          <p className="text-2xl text-green-600 text-end font-mono font-bold">{name}</p>
          <p className="bg-gray-600 px-4 py-6 rounded">{about}</p>
          <div className="text-end">
          <Link to={`/details/${id}`}>
            <button className="btn border border-green-600">Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
