import React from 'react';
import About from '../../About/About';
import Contact from '../../ContactForm/Contact';
import ParticlesComp from '../../PartilcesComp/ParticlesComp';
import AllProjects from '../Projects/ALLProjects/AllProjects';
import Project from '../Projects/Project';
import Self from '../Self/Self';
import Footer from '../../Footer/Footer';
const Home = () => {
    return (
        <div className='overflow-hidden bg-navy'>
       <div  className='w-3/4 mx-auto mt-8'>
       <Self></Self>
       </div>
       <div className='mt-16 lg:mt-52'>
        <h2 className='text-5xl text-green-600 font-semibold w-3/4 mx-auto  mt-8'>Featured Projects</h2>
        <AllProjects></AllProjects>
       </div>
       <div className='mt-64'>
        <About></About>
       </div>
       <div className=' mt-48'>
       <h2 className='text-5xl text-green-600 my-8 text-center'>Get In Touch!</h2>
       <Contact></Contact>
       </div>

       <div>
        <Footer></Footer>
       </div>
       <div className='w-auto pb-4'>
       <div className='flex justify-center'>
        <span className='border-r-2 border-r-green-600 px-2 text-Slate'>Copyright @ <span className='text-green-600 '>2023</span></span>
        <span className='ml-2  text-Slate'>Faria Rahman</span> 
      </div>
       </div>
        </div>
    );
};

export default Home;