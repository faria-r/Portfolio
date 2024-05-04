import React from "react";
import { FaBootstrap, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import img1 from "../../assets/img/e.png";
const Skills = () => {
  return (
    <div className=" w-[80vw] mx-auto grid lg:grid-cols-2 gap-4 text-center ">
      <div className="border border-x-lightSlate border-y-teal min-h-[60vh] my-auto  mx-auto text-center mb-4 lg:w-[35vw] p-8  ">
        <div>
          <div className="text-center mb-6 text-lightSlate text-3xl">
            <h2>Frontend</h2>
          </div>
          <div className="flex justify-center gap-2 items-center flex-wrap  ">
            <div>
              <button className="btn  bg-white rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
                <FaReact className="mr-[2px]" />
                ReactJS
              </button>
            </div>

            <div>
              <button className="btn bg-transparent text-teal rounded-lg mx-[2px] px-2 py-0 border-green-600  ">
                <TbBrandJavascript className="mr-[2px]" />
                Javascript
              </button>
            </div>

            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 bg-white text-teal border-green-600  ">
                <TbBrandJavascript className="mr-[2px]" />
                ES6
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 bg-transparent text-teal border-green-600  ">
                <SiTailwindcss className="mr-[2px]" />
                tailwind
              </button>
            </div>
            <div className="text-center">
              <button className="btn rounded-lg  px-4 bg-white text-center  mx-auto text-teal py-0 border-green-600  ">
                <SiFirebase className="mr-[2px]" />
                Firebase
              </button>
            </div>
            <div className="text-center">
              <button className="btn rounded-lg bg-transparent  px-2  text-center  mx-auto text-teal py-0 border-green-600  ">
                <FaBootstrap className="mr-[2px]" />
                Bootstrap
              </button>
            </div>
            <div className="text-center">
              <button className="btn bg-transparent rounded-lg  px-2 bg-white text-center  mx-auto text-teal py-0 border-green-600  ">
                <SiCss3 className="mr-[2px]" />
              CSS
              </button>
            </div>
            <div className="text-center">
              <button className="btn bg-transparent rounded-lg  px-2 bg-white text-center  mx-auto text-teal py-0 border-green-600  ">
                <FaHtml5 className="mr-[2px]" />
               HTML
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-x-lightSlate border-y-teal min-h-[60vh] my-auto  mx-auto text-center mb-4 lg:w-[35vw] p-8  ">
        <div>
          <div className="text-center mb-6 text-lightSlate text-3xl">
            <h2>Backend</h2>
          </div>
          <div className="flex justify-center gap-2 items-center flex-wrap  ">
            <div>
              <button className="btn bg-transparent rounded-lg mx-[2px] px-4 py-0 text-teal bg-white border-green-600  ">
              <img className="w-4 mr-2" src="https://i.ibb.co/Ycf1ZbX/nodr.png"/>
                NodeJS
              </button>
            </div>
            <div>
              <button className="btn bg-transparent text-teal rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
              <img className="w-4 mr-2" src="https://i.ibb.co/JybpzzB/mn.png"/> 
                MongoDB
              </button>
            </div>
            <div>
              <button className="btn bg-transparent rounded-lg mx-[2px] bg-white text-teal px-4 py-0 border-green-600  ">
              <img className="w-6 mr-2" src="https://i.ibb.co/qrqMfh8/fhg.png"/> 
                Express
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border border-x-lightSlate border-y-teal min-h-[60vh] my-auto lg:w-[35vw] mx-auto text-center mb-4  p-8  ">
        <div>
          <div className="text-center mb-6 text-lightSlate text-3xl">
            <h2>Programming Languages</h2>
          </div>
          <div className="flex justify-center gap-2 items-center flex-wrap  ">
            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
                <FaReact className="mr-[2px]" />
                Git
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 text-teal bg-white border-green-600  ">
                <FaNodeJs className="mr-[2px]" />
                Github
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
                <SiMongodb className="mr-[2px]" />
                Figma
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] bg-white text-teal px-4 py-0 border-green-600  ">
                <SiExpress className="mr-[3px]" />
                Vercel
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] px-2 py-0 border-green-600  ">
                <TbBrandJavascript className="mr-[2px]" />
                VScode
              </button>
            </div>

            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 bg-white text-teal border-green-600  ">
                <SiTailwindcss className="mr-[2px]" />
                Netlify
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="border border-x-lightSlate border-y-teal min-h-[60vh] my-auto lg:w-[35vw] mx-auto text-center mb-4  p-8  ">
        <div>
          <div className="text-center mb-6 text-lightSlate text-3xl">
            <h2>Tools</h2>
          </div>
          <div className="flex justify-center gap-2 items-center flex-wrap  ">
            <div>
              <button className="btn bg-transparent rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
              <img className="w-4 mr-2" src="https://i.ibb.co/pzg3MXP/git.png"/>
                Git
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 text-teal bg-white border-green-600  ">
                <FaGithub className=" text-black mr-[2px]" />
                Github
              </button>
            </div>
            <div>
              <button className="btn bg-transparent rounded-lg mx-[2px] px-4 py-0 border-green-600  ">
              <img className="w-4 mr-2" src="  https://i.ibb.co/L16PQ28/fig.png"/>
                Figma
              </button>
            </div>
            <div>
              <button className="btn rounded-lg mx-[2px] bg-white text-teal px-4 py-0 border-green-600  ">
              <SiVercel className="mr-[3px]" />
                Vercel
              </button>
            </div>
            <div>
              <button className="btn bg-transparent rounded-lg mx-[2px] px-2 py-0 border-green-600  ">
            <img className="w-4 mr-2" src="  https://i.ibb.co/z4Zfzqp/vs.webp"/>
                VScode
              </button>
            </div>

            <div>
              <button className="btn rounded-lg mx-[2px] px-4 py-0 bg-white text-teal border-green-600  ">
             <img  className="w-4 mr-2" src="https://i.ibb.co/qmBxrMW/net.png"/>
                Netlify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
