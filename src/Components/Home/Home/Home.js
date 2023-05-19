import React from 'react';
import About from '../../About/About';
import Contact from '../../ContactForm/Contact';
import ParticlesComp from '../../PartilcesComp/ParticlesComp';
import AllProjects from '../Projects/ALLProjects/AllProjects';
import Project from '../Projects/Project';
import Self from '../Self/Self';
const Home = () => {
    return (
        <div >
       <div  className='w-3/4 mx-auto mt-8'>
       <Self></Self>
       </div>
       <div className='mt-16 lg:mt-52'>
        <h2 className='text-5xl text-green-600 font-semibold lg:ml-32 mt-12'>Featured Projects</h2>
        <AllProjects></AllProjects>
       </div>
       <div className='mt-64'>
        <About></About>
       </div>
       <div className='mb-16 mt-48'>
       <h2 className='text-5xl text-green-600 my-8 text-center'>Get In Touch!</h2>
       <Contact></Contact>
       </div>
       
        </div>
    );
};

export default Home;