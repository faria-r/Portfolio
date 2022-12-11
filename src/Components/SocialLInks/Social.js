import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Social = () => {
    return (
        <div>
            <div className="left-0">
        <ul className="steps steps-vertical ">
          <li className="step ">
            <FaGithub className="text-2xl"></FaGithub>
          </li>
          <li className="step ">
            <FaLinkedin className="text-2xl"></FaLinkedin>
          </li>
          <li className="step ">
            <FaFacebook className="text-2xl"></FaFacebook>
          </li>
          <li className="step">
            <FaTwitter className="text-2xl"></FaTwitter>
          </li>
        </ul>
      </div>
        </div>
    );
};

export default Social;