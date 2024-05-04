import React from 'react';

const SkillCard = () => {
    
    return (
        <div>
             <div className="border border-x-lightSlate border-y-teal min-h-[60vh] my-auto  mx-auto text-center mb-4 w-[35vw] p-8  ">
     <div >
      <div className="text-center mb-6 text-lightSlate text-3xl"><h2>Frontend</h2></div>
      <div className="flex justify-center gap-2 items-center flex-wrap  ">
      <div>
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
          <div className="text-center">
            <button className="btn px-4 bg-white text-center w-[10vw] mx-auto text-teal py-0 border-green-600  ">
              <SiFirebase className="mr-[2px]" />
              Firebase
            </button>
          </div>
      </div>
         
        </div>
       
       
    </div>
        </div>
    );
};

export default SkillCard;