import React from 'react';
import ParticlesComp from '../PartilcesComp/ParticlesComp';
import Cards from './Cards';
import Skills from './Skills';
const About = () => {
    return (
        <div id='about'>
            <div className=" w-1/2 mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div>
      <div className='inline'>
      <h1 className="text-5xl font-bold" >About Me</h1> 
      <hr/>
      </div>
      <p className="py-6">Hello This is Faria Sultana Bintha Rohman.I am web developer.I am working in this field from last one year.Back two years ago , i found that i am interested to work with website,build something new and give it a attractive look.So i started to Learning things to make my dream true.And now i can build Full stack Projects!</p>
      <div className='lg:relative h-auto p-8'>
      <Cards></Cards>
      <div className='lg:absolute  top-16 lg:top-24 left-48'>
      <Skills></Skills>
      </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;