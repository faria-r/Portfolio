import React from 'react';
import Contact from '../../ContactForm/Contact';
import Self from '../Self/Self';
import Footer from '../../Footer/Footer';
import DetailedAbout from '../../DetailedAbout/DetailedAbout';
import Title from '../../Title/Title';

import FeaturedProjects from '../../FeaturedProjects/FeaturedProjects';
import Skills from '../../SKILLS/Skills';
const Home = () => {
    const year = new Date();
    return (
        <div className='overflow-hidden bg-navy'>
       <div  className='w-3/4 mx-auto mt-24'>
       <Self></Self>
       </div>
       <div>
        <DetailedAbout></DetailedAbout>
       </div>
       <div className='mt-16'>
        <Title value={'Some Things I’ve Built'}></Title>
       </div>
       <div>
      <FeaturedProjects></FeaturedProjects>
       </div>
       <div className='mt-16'>
        <Title value={'Skills I’ve'}></Title>
       </div>
       <div className='mt-16'>
      <Skills></Skills>
       </div>
       <div className=' mt-48'>
       <h2 className='text-5xl text-green-300 my-8 text-center'>Get In Touch!</h2>
       <Contact></Contact>
       </div>

       <div>
        <Footer></Footer>
       </div>
       <div className='w-auto pb-4'>
       <div className='flex justify-center'>
        <span className='border-r-2 border-r-green-600 px-2 text-Slate'>Copyright @ <span className='text-green-300 '>{year.getFullYear()}</span></span>
        <span className='ml-2  text-Slate'>Faria Rahman</span> 
      </div>
       </div>
        </div>
    );
};

export default Home;