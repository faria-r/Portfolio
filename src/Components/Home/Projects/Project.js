import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
const Project = ({project}) => {
  useEffect(() => {
    AOS.init();
  }, [])
    const {id,image,name,about} = project;
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"data-aos-duration="2000" className="relative mt-32 overflow-hidden">
      <div className="card shadow-2xl shadow-green-400 lg:w-[650px] sm:mx-auto lg:mr-[450px] my-16 glass">
        <figure className="h-96">
          <img src={image} alt="car!" />
        </figure>
      </div>
      <div className="lg:absolute lg:top-16 lg:left-[750px] card lg:w-[550px] sm:mx-auto lg:mr-[450px] my-12 bg-gray-600">
        <div className="card-body text-white">
            <p className="text-2xl text-green-600">{name}</p>
          <p>{about}</p>
          <Link to={`/details/${id}`}>
        <button className="btn border border-green-600">
         Details
        </button>
      </Link>
        </div> 
      </div>
     
    </div>
  );
};

export default Project;
