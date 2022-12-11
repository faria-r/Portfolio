import React from "react";

const Project = ({project}) => {
    const {image,name,about,Technology} = project;
  return (
    <div className="relative mt-32">
      <div className="card shadow-2xl shadow-green-400 lg:w-[650px] sm:mx-auto lg:mr-[450px] my-16 glass">
        <figure className="h-96">
          <img src={image} alt="car!" />
        </figure>
      </div>
      <div className="lg:absolute lg:top-4 lg:left-[750px]  card lg:w-[450px] sm:mx-auto lg:mr-[450px] my-16 bg-gray-600">
        <div className="card-body text-white">
            <p className="text-2xl text-green-600">{name}</p>
          <p>{about}</p>
          <p className="text-2xl text-green-600">Technology: {Technology}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
