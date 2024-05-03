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
       <div id='about'>
        <Title value={'About Me'}></Title>
        <DetailedAbout></DetailedAbout>
       </div>
       
       <div id='project' className='mt-36'>
       <div >
        <Title value={'Some Things I’ve Built'}></Title>
       </div>
      <FeaturedProjects></FeaturedProjects>
       </div>
       <div className='mt-16'>
        <Title value={'Skills I’ve'}></Title>
       </div>
       <div  id='skills' className='mt-16 mb-16'>
      <Skills></Skills>
       </div>
       <div id='#contact' className='mt-20'>
     <Title value={'Get In Touch'}></Title>
       <Contact></Contact>
       </div>

       <div>
        <Footer></Footer>
       </div>
       <div className='flex justify-center -mb-32 mt-8 border-teal'>
        <span className='border-r-2 border-r-green-600 px-2 text-Slate'>Copyright @ <span className='text-green-300 '>{year.getFullYear()}</span></span>
        <span className='ml-2  text-Slate'>Faria Rahman</span> 
      </div>
       <div className='bg-teal clip-path-mypoly h-[10vh] p-28 border border-lightSlate'>
    
       </div>
        </div>
    );
};

export default Home;