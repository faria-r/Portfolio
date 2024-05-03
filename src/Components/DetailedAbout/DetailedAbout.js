import React from "react";

const DetailedAbout = () => {
  return (
    <div className="w-[70vw]  mx-auto lg:flex justify-between items-center">
      <div className="lg:w-[40vw] ">
        
        <div className="text-lightSlate">
          <p>
            Hey there! I'm Faria Sultana, a junior web developer with a passion
            for crafting engaging digital experiences. Over the past two years,
            I've immersed myself in various web projects, honing my skills in
            Node.js, React.js, MongoDB, Express.js, Axios, Tailwind CSS, and the
            React Tanstack query.
          </p>
          <p className="py-6">I'm currently focused on mastering
            ReactJS to create seamless user interfaces. I thrive on challenges
            and love learning new technologies.</p>
            <p>
            Beyond coding, I believe in collaboration and continuous improvement. I enjoy exploring the latest trends in tech, experimenting with new tools and frameworks, and staying curious about what's next in the ever-evolving world of web development. I'm particularly interested in exploring the potential of serverless architecture and progressive web applications.
            </p>
        </div>
      </div>

     
      <div className="hidden lg:flex relative lg:w-[20vw] border-[1px] border-teal lg:h-[44vh]" >
      <div className="bg-teal absolute bottom-6 -left-6 lg:w-[20vw] lg:h-[43vh] ">

</div>
      </div>
     
    </div>
  );
};

export default DetailedAbout;
