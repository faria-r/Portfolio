import React from 'react';
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
      <div className='text-green-600'>
        <p className='text-2xl'>Technology: Currently I am Working With:</p>
        <ul className='list list-disc text-xl  grid grid-cols-2 gap-3 lg:ml-16 mt-8'>
            <li>ReactJS</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default About;