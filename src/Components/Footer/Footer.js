import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='block lg:hidden border-t-2 border-black shadow-green-600'>
            <div className="w-[40vw] mx-auto my-4">
        <ul className="flex justify-between ">
          <li className="">
          <a href="https://github.com/faria-r" target='_blank' rel='noreferrer'>  <FaGithub className="text-2xl text-green-600"></FaGithub></a>
          </li>
          <li className="">
          <a href="https://www.linkedin.com/in/faria-r/" target='_blank' rel='noreferrer'>  <FaLinkedin className="text-2xl text-green-600"></FaLinkedin></a>  
          </li>
          <li className="">
          <a href="https://web.facebook.com/faria.frb/" target='_blank' rel='noreferrer'>  <FaFacebook className="text-2xl text-green-600"></FaFacebook></a> 
          </li>
          <li className="">
          <a href="https://twitter.com/FariaR20" target='_blank' rel='noreferrer'>  <FaTwitter className="text-2xl text-green-600"></FaTwitter></a> 
          </li>
        </ul>
      </div>
     
        </div>
    );
};

export default Footer;