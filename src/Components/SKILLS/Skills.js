import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import img1 from '../../assets/img/e.png'
const Skills = () => {
  return (
    <div className="w-1/2 mx-auto border relative rounded">
      <div className="h-auto">
        <img
          className="rounded w-[100%] lg:h-[80vh]"
          src="https://i.ibb.co/MpyQrFX/bg.gif"
        />
      </div>
      <div className="absolute lg:w-[40vw] mx-auto h-1/2 lg:my-auto top-0 bottom-0 right-0 left-0 text-center p-4 lg:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:px-6  items-center gap-2 my-auto  ">
          <div className="">
            <button className="btn px-4 py-0 border-green-600  ">
              <FaReact className="mr-[2px]" />
              ReactJS
            </button>
          </div>
          <div>
            <button className="btn px-4 py-0 text-teal bg-white border-green-600  ">
              <FaNodeJs className="mr-[2px]" />
              NodeJS
            </button>
          </div>
          <div>
            <button className="btn px-4 py-0 border-green-600  ">
              <SiMongodb className="mr-[2px]" />
              MongoDB
            </button>
          </div>
          <div>
            <button className="btn bg-white text-teal px-4 py-0 border-green-600  ">
            <SiExpress className="mr-[3px]" />
              Express
            </button>
          </div>
          <div>
            <button className="btn px-2 py-0 border-green-600  ">
              <TbBrandJavascript className="mr-[2px]" />
              Javascript
            </button>
          </div>
         
          <div>
            <button className="btn px-4 py-0 bg-white text-teal border-green-600  ">
              <SiTailwindcss className="mr-[2px]" />
             tailwind
            </button>
          </div>
          <div className="w-[31vw] mx-auto text-center">
            <button className="btn px-4 bg-white text-teal py-0 border-green-600  ">
              <SiFirebase className="mr-[2px]" />
              Firebase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
