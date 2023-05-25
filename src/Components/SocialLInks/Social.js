import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Social = () => {
    return (
        <div className=' hidden  lg:block'>
            <div className="lg:left-0">
        <ul className="  ">
        <div className='flex flex-col justify-center items-center'>
        <div>
          <li className="mb-6 ml-8 ">
          <a href="https://github.com/faria-r" target='_blank' rel='noreferrer'>  <FaGithub className="text-2xl text-Slate"></FaGithub></a>
          </li>
          </div>
          <div>
          <li className="mb-6 ml-8">
          <a href="https://www.linkedin.com/in/faria-r/" target='_blank' rel='noreferrer'>  <FaLinkedin className="text-2xl text-Slate"></FaLinkedin></a>  
          </li>
          </div>
          <div>
          <li className="mb-6 ml-8">
          <a href="https://web.facebook.com/faria.frb/" target='_blank' rel='noreferrer'>  <FaFacebook className="text-2xl text-Slate"></FaFacebook></a> 
          </li>
          </div>
         <div>
         <li className="mb-8 ml-8">
          <a href="https://twitter.com/FariaR20" target='_blank' rel='noreferrer'>  <FaTwitter className="text-2xl text-Slate"></FaTwitter></a> 
          </li>
         </div>
         <div>
         <li>
            <div className='h-24 border-r-2 ml-8 w-[1px] bg-green-600 border-Slate'></div>
          </li>
         </div>
        </div>
        </ul>
      </div>
        </div>
    );
};

export default Social;