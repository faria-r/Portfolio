import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from './styles.css'
const ProjectCard = ({ p}) => {
  return (
    <div className="custom relative mt-8 overflow-hidden w-[80vw] mx-auto"
    >
      <div data-aos="fade-right" data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000" className="card bg-Darknavy border border-teal  shadow-md shadow-lightSlate sm:w-[70vw] lg:w-[50vw]  my-16">
        <figure className="h-96">
         <a href={p.Link} target="_blank"><img
            src={p.image}
            className="sm:w-auto lg:w-[45vw] rounded"
            alt="project!"
          /></a>
        </figure>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
        className=" lg:absolute lg:top-20 lg:left-[45%] lg:right-16 card lg:w-[45vw] lg:my-12 "
      >
        <div className="card-body text-Slate">
          <p className="text-2xl text-green-600 text-end font-mono font-bold">
            {p.name}
          </p>
          <p className="bg-Darknavy  px-4 py-6 rounded">{p.about}</p>
        </div>
      </div>
      <div className="lg:absolute lg:top-80 lg:left-[53%] lg:right-16 card lg:w-[40vw] lg:my-12 ">
        <div className="text-Slate mb-2  gap-8 text-xs flex justify-around items-center mx-auto">
          {
            p.Technology.map(t=> <span  t={t}>{t}</span> )
          }
        </div>

        <div className="text-Slate gap-8 text-2xl flex justify-around items-center mx-auto">
          <div className="tooltip" data-tip="Client-Side">
            <a href={p.cLink} target="_blank">
              <FaGithub></FaGithub>
            </a>
          </div>
          <div className="tooltip" data-tip="Server-Side">
            <a href={p.sLink} target="_blank">
              <FaGithub></FaGithub>
            </a>
          </div>
          <div className="tooltip" data-tip="Live Site">
            <a href={p.Link} target="_blank">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
