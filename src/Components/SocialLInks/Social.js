import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Social = () => {
    return (
        <div className=' hidden  lg:block'>
            <div className="lg:left-0">
        <ul className="steps steps-vertical ">
          <li className="step ">
          <a href="https://github.com/faria-r" target='_blank' rel='noreferrer'>  <FaGithub className="text-2xl"></FaGithub></a>
          </li>
          <li className="step ">
          <a href="https://www.linkedin.com/in/faria-r/" target='_blank' rel='noreferrer'>  <FaLinkedin className="text-2xl"></FaLinkedin></a>  
          </li>
          <li className="step ">
          <a href="https://web.facebook.com/faria.frb/" target='_blank' rel='noreferrer'>  <FaFacebook className="text-2xl"></FaFacebook></a> 
          </li>
          <li className="step">
          <a href="https://twitter.com/FariaR20" target='_blank' rel='noreferrer'>  <FaTwitter className="text-2xl"></FaTwitter></a> 
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Social;