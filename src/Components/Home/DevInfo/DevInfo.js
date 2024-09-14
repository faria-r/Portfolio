import React from "react";
import fr from "../../../assets/img/fr.jpg";
import check from "../../../assets/img/checked.png";
const DevInfo = () => {
  return (
    <div className="w-auto text-white  p-6 text-center my-16 mb-16 ">
      <h2 className="w-max mx-auto border-x-[1px] px-4 text-green-600 border-white text-center font-mono font-bold text-2xl lg:text-5xl my-16">
        Meet Faria Rahman
      </h2>
      <div className="w-[80vw] mx-auto lg:flex justify-center  text-center p-6">
        <div className="mr-4 mx-auto">
          <img className=" w-52 mx-auto h-[46vh]" src={fr} alt="" />
        </div>
        <div className="text-center lg:text-start mx-auto pt-6 lg:pt-2">
          <h2 className="text-2xl font-mono">MERN Stack Developer</h2>
          <div className="">
            
            {/* <div>
              <p className="font-bold mb-2">PHONE</p>
              <p>+880 1970-477973</p>
            </div> */}
            <div>
              <p className="font-bold mb-2 ">EMAIL</p>
              <p className="lowercase">FARIARAHMAN622@GMAIL.COM</p>
            </div>
            {/* <div className=" mt-6">
              <p className="font-bold mb-2 ">Technology</p>
              <div className="flex w-auto justify-between items-center gap-x-16">
                <div>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    ReactJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    Javascript
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" /> ES6
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    TailwindCSS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    Firebase
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    ExpressJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    NodeJS
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" /> JWT
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    RESTAPI
                  </p>
                  <p className="flex items-center gap-1 ">
                    <img className="w-4 h-4" src={check} alt="" srcset="" />{" "}
                    CRUD
                  </p>
                </div>
              </div>
            </div> */}
            <div className="w-auto mt-6">
              <p className="font-bold mb-2 ">Education</p>
              <p className="">
                Bsc In{" "}
                <span className="font-mono font-bold">
                  Computer Science & Engineering
                </span>
              </p>
              <p className="">Graduation Year : 2023</p>
              <p className="">CGPA : 3.84</p>
            </div>
          </div>

         
        </div>
        <div className=" lg:text-start mt-6">
            <p className="font-bold mb-2 ">Experience</p>
            <p className="">
              <span className="font-bold"> Instructor</span> <br />
              <span className="text-xs leading-none"> Department of </span>{" "}
              <br />
              <span className="font-mono font-bold">
                Computer Science & Technology
              </span>
            </p>
            <p className="">Compact Polytechnic Institute</p>
            <p className="">
              {" "}
              June <span className="font-mono font-semibold">2020</span> -
              Present
            </p>
          </div>
      </div>
    </div>
  );
};

export default DevInfo;
