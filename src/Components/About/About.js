import React from 'react';
import ParticlesComp from '../PartilcesComp/ParticlesComp';
import Cards from './Cards';
import Skills from './Skills';
const About = () => {
    return (
        <div id='about'>
            <div className=" w-[80vw] mx-auto">

   
    <div className='lg:flex block lg:flex-row justify-center items-center'>
      <div className='inline w-[30vw]'>
      <div className='flex justify-between items-center'>
      <div className='w-36 border-t-2 border-green-600'></div>
      <h1 className="text-5xl text-lightSlate font-bold" >About Me</h1> 
    
      </div>
      <p className="py-6 text-Slate text-justify">Hello This is Faria Sultana Bintha Rohman.I'm a web developer.I am working in this field from last one year.Back two years ago , i found that i am interested to work with website,build something new and give it a attractive look.So i started to Learning things to make my dream true.And now i can build Full stack Projects!</p>
      </div>
     
      <div className='lg:relative h-auto p-8'>
      <Cards></Cards>
      <div className='lg:absolute  top-16 lg:top-24 left-48'>
      <Skills></Skills>
      </div>
      </div>
    </div>
 
</div>

        </div>
    );
};

export default About;