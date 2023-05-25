import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/navbar/Navbar';
import Social from '../SocialLInks/Social';
import Email from '../SocialLInks/Email';

const Main = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
           <div >
           <div className='lg:fixed bottom-0 right-4'>
<Email></Email>
            </div>
            <div className='lg:fixed mt-0 bottom-0'>
<Social></Social>
            </div>
           
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;